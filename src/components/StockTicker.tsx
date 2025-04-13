import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stock {
  symbol: string;
  price: number;
  change: number;
}

export const StockTicker: React.FC = () => {
  const stocks: Stock[] = [
    { symbol: 'AAPL', price: 178.32, change: 2.45 },
    { symbol: 'MSFT', price: 378.85, change: 4.23 },
    { symbol: 'GOOGL', price: 142.56, change: -1.24 },
    { symbol: 'AMZN', price: 175.35, change: 2.18 },
    { symbol: 'TSLA', price: 245.78, change: -3.45 },
    { symbol: 'META', price: 485.92, change: 5.67 },
    { symbol: 'NVDA', price: 789.45, change: 12.34 },
    { symbol: 'JPM', price: 156.78, change: 1.23 }
  ];

  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...stocks, ...stocks].map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="flex items-center mx-8"
          >
            <span className="font-semibold">{stock.symbol}</span>
            <span className="mx-2">${stock.price.toFixed(2)}</span>
            <div className={`flex items-center ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stock.change >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              <span>{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};