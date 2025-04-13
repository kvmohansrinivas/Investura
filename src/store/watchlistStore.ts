import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type WatchlistItem = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  sector?: string;
  addedAt: Date;
};

interface WatchlistState {
  items: WatchlistItem[];
  addItem: (item: Omit<WatchlistItem, 'id' | 'addedAt'>) => void;
  removeItem: (symbol: string) => void;
  updateItem: (id: string, data: Partial<WatchlistItem>) => void;
  isInWatchlist: (symbol: string) => boolean;
}

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({
        items: [...state.items, {
          ...item,
          id: crypto.randomUUID(),
          addedAt: new Date()
        }]
      })),
      removeItem: (symbol) => set((state) => ({
        items: state.items.filter(item => item.symbol !== symbol)
      })),
      updateItem: (id, data) => set((state) => ({
        items: state.items.map(item => 
          item.id === id ? { ...item, ...data } : item
        )
      })),
      isInWatchlist: (symbol) => {
        return get().items.some(item => item.symbol === symbol);
      }
    }),
    {
      name: 'watchlist-storage',
    }
  )
);
