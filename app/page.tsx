'use client';

import { useState, useEffect } from 'react';
import CryptoTable from '@/components/crypto-table';
import { motion } from 'framer-motion';

interface Cryptocurrency {
  id: number;
  rank: number;
  name: string;
  symbol: string;
  slug: string;
  is_active: number;
  first_historical_data: string;
  last_historical_data: string;
}

export default function Home() {
  const [cryptoData, setCryptoData] = useState<Cryptocurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/crypto');
        const result = await response.json();
        if (result.data) {
          setCryptoData(result.data);
        }
      } catch (err) {
        setError('Failed to fetch cryptocurrency data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-12 h-12 border-4 border-primary rounded-full border-t-transparent"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive text-center"
        >
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Cryptocurrency Market
          </h1>
          <p className="text-muted-foreground text-center">
            A modern dashboard for cryptocurrency market data
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <CryptoTable data={cryptoData} />
        </div>
      </motion.div>
    </main>
  );
}
