import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useWatchlistStore } from '../store/watchlistStore';
import { Trash2, ArrowUp, ArrowDown, Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample data for demonstration
const mockAssets = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.42, previousPrice: 172.30, change: 3.12, changePercent: 1.81, sector: 'Technology' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 318.65, previousPrice: 322.10, change: -3.45, changePercent: -1.07, sector: 'Technology' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 128.42, previousPrice: 126.83, change: 1.59, changePercent: 1.25, sector: 'Consumer Cyclical' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 425.51, previousPrice: 410.17, change: 15.34, changePercent: 3.74, sector: 'Technology' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 138.17, previousPrice: 137.30, change: 0.87, changePercent: 0.63, sector: 'Communication Services' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.12, previousPrice: 240.50, change: 4.62, changePercent: 1.92, sector: 'Consumer Cyclical' },
  { symbol: 'BRK.B', name: 'Berkshire Hathaway Inc.', price: 345.67, previousPrice: 342.10, change: 3.57, changePercent: 1.04, sector: 'Finance' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 312.45, previousPrice: 308.20, change: 4.25, changePercent: 1.38, sector: 'Communication Services' },
  { symbol: 'V', name: 'Visa Inc.', price: 234.56, previousPrice: 230.78, change: 3.78, changePercent: 1.64, sector: 'Finance' },
  { symbol: 'JNJ', name: 'Johnson & Johnson', price: 162.34, previousPrice: 160.50, change: 1.84, changePercent: 1.15, sector: 'Healthcare' },
  { symbol: 'WMT', name: 'Walmart Inc.', price: 152.67, previousPrice: 150.89, change: 1.78, changePercent: 1.18, sector: 'Consumer Defensive' },
  { symbol: 'PG', name: 'Procter & Gamble Co.', price: 145.23, previousPrice: 143.50, change: 1.73, changePercent: 1.21, sector: 'Consumer Defensive' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 148.34, previousPrice: 145.67, change: 2.67, changePercent: 1.83, sector: 'Finance' },
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', price: 110.45, previousPrice: 108.90, change: 1.55, changePercent: 1.42, sector: 'Energy' },
  { symbol: 'BAC', name: 'Bank of America Corporation', price: 29.67, previousPrice: 28.90, change: 0.77, changePercent: 2.66, sector: 'Finance' },
  { symbol: 'KO', name: 'Coca-Cola Co.', price: 58.23, previousPrice: 57.80, change: 0.43, changePercent: 0.74, sector: 'Consumer Defensive' },
  { symbol: 'PEP', name: 'PepsiCo Inc.', price: 182.45, previousPrice: 180.90, change: 1.55, changePercent: 0.86, sector: 'Consumer Defensive' },
  { symbol: 'CSCO', name: 'Cisco Systems Inc.', price: 54.67, previousPrice: 53.90, change: 0.77, changePercent: 1.43, sector: 'Technology' },
  { symbol: 'ORCL', name: 'Oracle Corporation', price: 123.45, previousPrice: 121.78, change: 1.67, changePercent: 1.37, sector: 'Technology' },
  { symbol: 'DIS', name: 'The Walt Disney Company', price: 89.34, previousPrice: 88.50, change: 0.84, changePercent: 0.95, sector: 'Communication Services' },
  { symbol: 'NFLX', name: 'Netflix Inc.', price: 400.12, previousPrice: 395.50, change: 4.62, changePercent: 1.17, sector: 'Communication Services' },
  { symbol: 'ADBE', name: 'Adobe Inc.', price: 530.45, previousPrice: 525.67, change: 4.78, changePercent: 0.91, sector: 'Technology' },
  { symbol: 'PFE', name: 'Pfizer Inc.', price: 35.67, previousPrice: 35.10, change: 0.57, changePercent: 1.62, sector: 'Healthcare' },
  { symbol: 'MRK', name: 'Merck & Co. Inc.', price: 110.23, previousPrice: 109.50, change: 0.73, changePercent: 0.67, sector: 'Healthcare' },
  { symbol: 'T', name: 'AT&T Inc.', price: 15.34, previousPrice: 15.10, change: 0.24, changePercent: 1.59, sector: 'Communication Services' },
  { symbol: 'VZ', name: 'Verizon Communications Inc.', price: 33.45, previousPrice: 33.00, change: 0.45, changePercent: 1.36, sector: 'Communication Services' },
  { symbol: 'INTC', name: 'Intel Corporation', price: 34.67, previousPrice: 34.10, change: 0.57, changePercent: 1.67, sector: 'Technology' },
  { symbol: 'AMD', name: 'Advanced Micro Devices Inc.', price: 110.45, previousPrice: 108.90, change: 1.55, changePercent: 1.42, sector: 'Technology' },
  { symbol: 'BA', name: 'The Boeing Company', price: 210.34, previousPrice: 208.50, change: 1.84, changePercent: 0.88, sector: 'Industrials' },
  { symbol: 'GE', name: 'General Electric Company', price: 115.67, previousPrice: 114.10, change: 1.57, changePercent: 1.38, sector: 'Industrials' },
];

type SortField = 'name' | 'price' | 'change' | 'changePercent' | 'sector';
type SortDirection = 'asc' | 'desc';

const WatchlistPage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const { items, removeItem, addItem, isInWatchlist } = useWatchlistStore();
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddAssets, setShowAddAssets] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRemoveItem = (symbol: string) => {
    removeItem(symbol);
  };

  const sortedItems = [...items].sort((a, b) => {
    let comparison = 0;

    if (sortField === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else {
      comparison = (a[sortField] as number) - (b[sortField] as number);
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const filteredItems = sortedItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredAssets = mockAssets.filter(asset =>
    (asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())) &&
    !isInWatchlist(asset.symbol)
  );

  return (
    isAuthenticated && (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Watchlist&nbsp;</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search assets..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowAddAssets(!showAddAssets)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Assets</span>
            </button>
          </div>
        </div>

        {showAddAssets && (
          <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add to Watchlist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAssets.map(asset => (
                <motion.div
                  key={asset.symbol}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <div className="font-medium">{asset.name}</div>
                    <div className="text-sm text-gray-600">{asset.symbol}</div>
                  </div>
                  <button
                    onClick={() => addItem({
                      ...asset,
                      price: Number(asset.price),
                      previousPrice: Number(asset.previousPrice),
                      change: Number(asset.change),
                      changePercent: Number(asset.changePercent),
                    })}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {paginatedItems.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button
                      onClick={() => toggleSort('name')}
                      className="flex items-center gap-1"
                    >
                      Symbol/Name
                      {sortField === 'name' && (
                        sortDirection === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button
                      onClick={() => toggleSort('price')}
                      className="flex items-center gap-1"
                    >
                      Price
                      {sortField === 'price' && (
                        sortDirection === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button
                      onClick={() => toggleSort('changePercent')}
                      className="flex items-center gap-1"
                    >
                      Change (%)
                      {sortField === 'changePercent' && (
                        sortDirection === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sector
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedItems.map(item => (
                  <tr key={item.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${item.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.changePercent.toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.sector}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleRemoveItem(item.symbol)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center p-4">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Previous
              </button>
              <span className="text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">No items in your watchlist.</div>
        )}
      </div>
    )
  );
};

export default WatchlistPage;
