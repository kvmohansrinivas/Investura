import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('user'),
  login: (email: string, password: string) => {
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify(mockUser));
        set({ user: mockUser, isAuthenticated: true });
      }
    }, 500);
  },
  signup: (name: string, email: string, password: string) => {
    setTimeout(() => {
      if (name && email && password) {
        const newUser = { ...mockUser, name, email };
        localStorage.setItem('user', JSON.stringify(newUser));
        set({ user: newUser, isAuthenticated: true });
      }
    }, 500);
  },
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  }
}));