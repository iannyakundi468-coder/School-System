import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GamificationContextType {
  xp: number;
  badges: string[];
  addXP: (amount: number) => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState<number>(0);
  const [badges, setBadges] = useState<string[]>([]);

  // Shared keys with Student Portal
  const XP_KEY = 'somobloom_xp';
  const BADGES_KEY = 'somobloom_badges';

  useEffect(() => {
    const savedXp = localStorage.getItem(XP_KEY);
    const savedBadges = localStorage.getItem(BADGES_KEY);
    
    if (savedXp) setXp(parseInt(savedXp, 10));
    if (savedBadges) setBadges(JSON.parse(savedBadges));
  }, []);

  useEffect(() => {
    localStorage.setItem(XP_KEY, xp.toString());
    localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
  }, [xp, badges]);

  const addXP = (amount: number) => {
    setXp(prev => prev + amount);
  };

  return (
    <GamificationContext.Provider value={{ xp, badges, addXP }}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};
