import React, { createContext, useContext, useState } from 'react';

type PointsContextType = {
  points: number;
  redeemPoints: (amount: number) => void;
  addPoints: (amount: number) => void;
};

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const PointsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState(2450);

  const redeemPoints = (amount: number) => {
    setPoints((prev) => Math.max(prev - amount, 0));
  };

  const addPoints = (amount: number) => {
    setPoints((prev) => prev + amount);
  };

  return (
    <PointsContext.Provider value={{ points, redeemPoints, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = (): PointsContextType => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error('usePoints must be used within PointsProvider');
  }
  return context;
};
