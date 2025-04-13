import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export const MarketPerformers: React.FC = () => {
  const stocks: Stock[] = [
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 789.45, change: 12.34 },
    { symbol: 'META', name: 'Meta Platforms Inc', price: 485.92, change: 5.67 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.85, change: 4.23 },
    { symbol: 'AAPL', name: 'Apple Inc', price: 178.32, change: 2.45 },
    { symbol: 'GOOGL', name: 'Alphabet Inc', price: 142.56, change: -1.24 },
    { symbol: 'TSLA', name: 'Tesla Inc', price: 245.78, change: -3.45 },
    { symbol: 'NFLX', name: 'Netflix Inc', price: 567.89, change: -4.56 },
    { symbol: 'COIN', name: 'Coinbase Global Inc', price: 123.45, change: -7.89 }
  ];

  const topPerformers = [...stocks].sort((a, b) => b.change - a.change).slice(0, 4);
  const worstPerformers = [...stocks].sort((a, b) => a.change - b.change).slice(0, 4);

  const StockList = ({ stocks, title }: { stocks: Stock[], title: string }) => (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{stock.name}</p>
              <p className="text-sm text-gray-600">{stock.symbol}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">${stock.price.toFixed(2)}</p>
              <div className={`flex items-center ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.change >= 0 ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                <span>{stock.change >= 0 ? '+' : ''}{stock.change}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <StockList stocks={topPerformers} title="Top Performers Today" />
      <StockList stocks={worstPerformers} title="Worst Performers Today" />
    </div>
  );
};