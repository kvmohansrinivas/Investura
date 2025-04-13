import React, { useState, useEffect } from 'react';
import { LogIn, UserPlus, LogOut, ChevronDown, Settings, Star, Bell, Search, Sun, Moon, X } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';

export const MenuBar: React.FC = function MenuBar() {
  const { user, isAuthenticated, login, signup, logout } = useAuthStore();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode based on localStorage
    const isDark = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
      localStorage.setItem('isDarkMode', next.toString());
      return next;
    });
  };

  const handleSearch = () => {
    const dummyData = ['Portfolio', 'Market News', 'Stock Recommendations'];
    const results = dummyData.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const dummyNotifications = [
    { id: 1, message: 'Your portfolio has increased by 5% today!' },
    { id: 2, message: 'Breaking News: Market volatility expected tomorrow.' },
    { id: 3, message: 'New stock recommendations are available in your watchlist.' },
  ];

  return (
    <div className="flex items-center gap-4">
      <button 
      onClick={() => setIsSearchOpen(true)} 
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="Open search"
      >
      <Search className="w-5 h-5 text-gray-700" />
      </button>

      <button 
      onClick={toggleDarkMode} 
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="Toggle theme"
      >
      {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </button>

      {isAuthenticated ? (
      <>
        <div className="relative">
        <button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <Bell className="w-6 h-6 text-gray-700" />
          {dummyNotifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {dummyNotifications.length}
          </span>
          )}
        </button>

        {isNotificationsOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
          {dummyNotifications.map((notification) => (
            <div
            key={notification.id}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
            {notification.message === 'Your portfolio has increased by 5% today!' ? (
              <Link to="/portfolio" className="block">
              {notification.message}
              </Link>
            ) : (
              notification.message
            )}
            </div>
          ))}
          </div>
        )}
        </div>

        <div className="relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <img
          src={user?.avatar}
          alt={user?.name}
          className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">{user?.name}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <Link
            to="/profile"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
            onClick={() => setIsProfileOpen(false)}
          >
            <Settings className="w-4 h-4" />
            <span>Profile Settings</span>
          </Link>
          <Link
            to="/watchlist"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
            onClick={() => setIsProfileOpen(false)}
          >
            <Star className="w-4 h-4" />
            <span>Watchlist</span>
          </Link>
          <button
            onClick={() => {
            logout();
            setIsProfileOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 w-full"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
          </div>
        )}
        </div>
      </>
      ) : (
      <>
        <button
        onClick={() => setIsLoginOpen(true)}
        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
        <LogIn className="w-5 h-5" />
        <span>Login</span>
        </button>

        <button
        onClick={() => setIsSignupOpen(true)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
        <UserPlus className="w-5 h-5" />
        <span>Sign Up</span>
        </button>
      </>
      )}

      <AuthModal
      isOpen={isLoginOpen}
      onClose={() => setIsLoginOpen(false)}
      mode="login"
      onSubmit={({ email, password }) => login(email, password)}
      />

      <AuthModal
      isOpen={isSignupOpen}
      onClose={() => setIsSignupOpen(false)}
      mode="signup"
      onSubmit={({ name, email, password }) => signup(name, email, password)}
      />

      {isSearchOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center z-50 pt-10">
        <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Search</h3>
          <button onClick={() => setIsSearchOpen(false)} className="p-1" aria-label="Close search">
          <X className="w-5 h-5" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full border rounded p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
        <div className="mt-4">
          {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
            <li key={index} className="text-gray-700 py-1">
              <Link to={`/${result.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
              {result}
              </Link>
            </li>
            ))}
          </ul>
          ) : (
          searchQuery && <p className="text-gray-500">No results found.</p>
          )}
        </div>
        </div>
      </div>
      )}
    </div>
  );
};