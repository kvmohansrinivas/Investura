export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  volume: string;
  chart: number[];
}

export const portfolioSummary = {
  totalValue: 284750.32,
  todayChange: 3254.12,
  todayChangePercent: 1.15,
  lastUpdated: new Date().toISOString()
};

export const stocksData: StockData[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 178.32,
    change: 2.45,
    changePercent: 1.39,
    marketCap: '2.85T',
    volume: '52.3M',
    chart: [150, 155, 153, 158, 162, 168, 172, 175, 173, 178]
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.85,
    change: 4.23,
    changePercent: 1.13,
    marketCap: '2.81T',
    volume: '28.1M',
    chart: [360, 365, 368, 372, 375, 371, 374, 376, 377, 378]
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.56,
    change: -1.24,
    changePercent: -0.86,
    marketCap: '1.79T',
    volume: '31.2M',
    chart: [145, 144, 143, 141, 142, 144, 143, 142, 141, 142]
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 175.35,
    change: 2.18,
    changePercent: 1.26,
    marketCap: '1.82T',
    volume: '42.8M',
    chart: [165, 168, 170, 172, 171, 173, 174, 173, 174, 175]
  }
];