# CMC Sort

A modern web application built with Next.js for displaying and sorting cryptocurrency data. The default sorting is based on the UCID.

```
From Coinmarketcap:: 

The Unified Cryptoasset ID (UCID) assigns a unique ID to each cryptoasset to minimize any confusion that may arise from assets that share identical tickers/symbols. The goal is to build a unified registry so as to work towards harmonized API standards and interoperability within this space.
```

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/)
  - [Framer Motion](https://www.framer.com/motion/)
- **Data Handling**: [@tanstack/react-table](https://tanstack.com/table/latest)
- **HTTP Client**: [Axios](https://axios-http.com/)

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/wagleanuj/cmc-sort.git

cd cmc-sort
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

- `/app` - Next.js app directory containing page components and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and shared logic
- `/public` - Static assets

## Features

- Modern, responsive user interface
- Cryptocurrency data display and sorting functionality
- Type-safe development with TypeScript
- Smooth animations with Framer Motion
- Customizable UI components with Radix UI
- Efficient data handling with TanStack Table

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
