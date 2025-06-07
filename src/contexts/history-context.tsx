import React, { createContext, useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';

type HistoryItem = {
  id: string;
  title: string;
  type: 'credit' | 'debit';
  points: number;
  icon: keyof typeof Feather.glyphMap;
  date: string;
};

type HistoryContextType = {
  history: HistoryItem[];
  addHistory: (item: Omit<HistoryItem, 'id' | 'date'>) => void;
};

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addHistory = (item: Omit<HistoryItem, 'id' | 'date'>) => {
    const newItem: HistoryItem = {
      ...item,
      id: Math.random().toString(36).slice(2),
      date: new Date().toLocaleString('pt-BR', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContextType => {
  const context = useContext(HistoryContext);
  if (!context) throw new Error('useHistory must be used within HistoryProvider');
  return context;
};
