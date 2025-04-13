import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PerformanceMetric {
  period: string;
  return: number;
  benchmark: number;
}

type PeriodFilter = 'All' | 'Short Term' | 'Medium Term' | 'Long Term';

export const PerformanceSummary: React.FC = () => {
  const [filter, setFilter] = useState<PeriodFilter>('All');
  
  const performanceData: PerformanceMetric[] = [
    { period: 'Daily', return: 1.25, benchmark: 0.85 },
    { period: 'Weekly', return: 3.75, benchmark: 2.95 },
    { period: 'Monthly', return: -2.15, benchmark: -1.85 },
    { period: 'YTD', return: 15.45, benchmark: 12.75 },
    { period: '1 Year', return: 22.35, benchmark: 18.90 },
    { period: '3 Year', return: 45.80, benchmark: 38.65 }
  ];

  const filterData = (data: PerformanceMetric[]): PerformanceMetric[] => {
    switch(filter) {
      case 'Short Term':
        return data.filter(item => ['Daily', 'Weekly', 'Monthly'].includes(item.period));
      case 'Medium Term':
        return data.filter(item => ['Monthly', 'YTD', '1 Year'].includes(item.period));
      case 'Long Term':
        return data.filter(item => ['1 Year', '3 Year'].includes(item.period));
      default:
        return data;
    }
  };

  const filteredData = filterData(performanceData);
  const chartData = filteredData.map(item => ({
    ...item,
    difference: +(item.return - item.benchmark).toFixed(2)
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Performance Summary</h2>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value as PeriodFilter)}
            className="border-none bg-gray-100 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Periods</option>
            <option value="Short Term">Short Term</option>
            <option value="Medium Term">Medium Term</option>
            <option value="Long Term">Long Term</option>
          </select>
        </div>
      </div>

      <div className="h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="period" />
            <YAxis tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              formatter={(value: number) => [`${value}%`, '']}
              labelFormatter={(label) => `Period: ${label}`}
            />
            <Legend />
            <Bar dataKey="return" name="Portfolio Return" fill="#4F46E5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="benchmark" name="Benchmark" fill="#A5B4FC" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Period</th>
              <th className="text-right py-3 px-4">Portfolio Return</th>
              <th className="text-right py-3 px-4">Benchmark</th>
              <th className="text-right py-3 px-4">Difference</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((metric) => {
              const difference = metric.return - metric.benchmark;
              const isPositive = difference >= 0;

              return (
                <tr key={metric.period} className="border-b last:border-0">
                  <td className="py-3 px-4 font-medium">{metric.period}</td>
                  <td className={`text-right py-3 px-4 ${metric.return >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.return >= 0 ? '+' : ''}{metric.return}%
                  </td>
                  <td className={`text-right py-3 px-4 ${metric.benchmark >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.benchmark >= 0 ? '+' : ''}{metric.benchmark}%
                  </td>
                  <td className="text-right py-3 px-4">
                    <div className={`flex items-center justify-end ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {isPositive ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span>{isPositive ? '+' : ''}{difference.toFixed(2)}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};