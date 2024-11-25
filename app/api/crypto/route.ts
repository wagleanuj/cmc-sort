import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
      {
        params: {
          CMC_PRO_API_KEY: 'UNIFIED-CRYPTOASSET-INDEX',
          listing_status: 'active'
        }
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cryptocurrency data' },
      { status: 500 }
    );
  }
}
