import React, { createContext, useContext, useState } from 'react';
import { benefits as allBenefits } from '@/data/benefits';

type Benefit = (typeof allBenefits)[0];

type BenefitsContextType = {
  availableBenefits: Benefit[];
  redeemBenefitById: (id: string) => void;
};

const BenefitsContext = createContext<BenefitsContextType | undefined>(undefined);

export const BenefitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [availableBenefits, setAvailableBenefits] = useState(allBenefits);

  const redeemBenefitById = (id: string) => {
    setAvailableBenefits(prev => prev.filter(b => b.id !== id));
  };

  return (
    <BenefitsContext.Provider value={{ availableBenefits, redeemBenefitById }}>
      {children}
    </BenefitsContext.Provider>
  );
};

export const useBenefits = () => {
  const context = useContext(BenefitsContext);
  if (!context) throw new Error('useBenefits must be used within BenefitsProvider');
  return context;
};
