import React from 'react';
import { PortfolioSummary } from './PortfolioSummary';
import { StockList } from './StockList';
import { PerformanceSummary } from './PerformanceSummary';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <PortfolioSummary />
      <PerformanceSummary />
      <StockList />
    </div>
  );
};