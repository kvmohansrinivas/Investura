import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { MenuBar } from './MenuBar';

export const Navigation: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="flex items-center gap-8">
      <nav className="hidden md:flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-md font-medium ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            } transition-colors`
          }
        >
          Home
        </NavLink>
        
        {isAuthenticated && (
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-md font-medium ${
                isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              } transition-colors`
            }
          >
            My Portfolio
          </NavLink>
        )}
        
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-md font-medium ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            } transition-colors`
          }
        >
          About Us
        </NavLink>
        
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-md font-medium ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            } transition-colors`
          }
        >
          Contact Us
        </NavLink>
      </nav>
      <MenuBar />
    </div>
  );
};