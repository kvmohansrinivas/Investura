import React from 'react';
import { StockChart } from './StockChart';
import { stocksData } from '../data/mockData';

export const StockList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Symbol</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Price</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Change</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Market Cap</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Volume</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Chart</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {stocksData.map((stock) => (
              <tr key={stock.symbol} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-semibold text-blue-600">{stock.symbol}</span>
                </td>
                <td className="px-6 py-4 text-gray-800">{stock.name}</td>
                <td className="px-6 py-4 text-right font-medium">
                  ${stock.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent}%)
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-600">{stock.marketCap}</td>
                <td className="px-6 py-4 text-right text-gray-600">{stock.volume}</td>
                <td className="px-6 py-4">
                  <div className="w-32">
                    <StockChart data={stock.chart} positive={stock.change >= 0} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};