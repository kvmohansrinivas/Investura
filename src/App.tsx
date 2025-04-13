import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutDashboard, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { NewsDetail } from './components/NewsDetail';
import { ProfileSettings } from './components/ProfileSettings';
import { useAuthStore } from './store/authStore';
import { Link } from 'react-router-dom';
import WatchlistPage from './components/WatchlistPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <LayoutDashboard className="w-8 h-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">Investura</h1>
              </Link>
              <Navigation />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={isAuthenticated ? <Dashboard /> : <LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/profile" element={isAuthenticated ? <ProfileSettings /> : <LandingPage />} />
            <Route path="/watchlist" element={isAuthenticated ? <WatchlistPage /> : <LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>

        {/* Footer - Modernized */}
        <footer className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200">
          {/* Top section with logo and description */}
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
              <div className="max-w-sm">
                <Link to="/" className="flex items-center gap-3 mb-4">
                  <LayoutDashboard className="w-8 h-8 text-blue-600" />
                  <h1 className="text-2xl font-bold text-gray-900">Investura</h1>
                </Link>
                <p className="text-gray-600 mb-6">
                  Empowering investors with cutting-edge tools and insights for making informed financial decisions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Links section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Quick Links</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={16} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={16} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={16} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Legal</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={16} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={16} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={16} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Contact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <MapPin size={20} className="shrink-0 mt-1 text-blue-600" />
                      <span>123 Main Street, Anytown, CA 12345</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <Mail size={20} className="shrink-0 text-blue-600" />
                      <a href="mailto:info@investura.com" className="hover:text-blue-600 transition-colors">info@investura.com</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <Phone size={20} className="shrink-0 text-blue-600" />
                      <a href="tel:+11234567890" className="hover:text-blue-600 transition-colors">(123) 456-7890</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright section */}
          <div className="bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <p className="text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} Investura. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;