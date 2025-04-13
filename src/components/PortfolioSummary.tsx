import React from 'react';
import { TrendingUp, DollarSign, Clock } from 'lucide-react';
import { portfolioSummary } from '../data/mockData';

export const PortfolioSummary: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Portfolio Value</p>
            <h3 className="text-2xl font-bold">{formatCurrency(portfolioSummary.totalValue)}</h3>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Today's Change</p>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-green-600">
                +{formatCurrency(portfolioSummary.todayChange)}
              </h3>
              <span className="text-green-600">
                ({portfolioSummary.todayChangePercent}%)
              </span>
            </div>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Last Updated</p>
            <h3 className="text-2xl font-bold">
              {new Date(portfolioSummary.lastUpdated).toLocaleTimeString()}
            </h3>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};