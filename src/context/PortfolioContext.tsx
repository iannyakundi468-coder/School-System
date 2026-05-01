import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PortfolioItem } from '../types/portfolio';

interface PortfolioContextType {
    items: PortfolioItem[];
    addItem: (item: Omit<PortfolioItem, 'id' | 'likes' | 'date'>) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, updates: Partial<PortfolioItem>) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const initialMockData: PortfolioItem[] = [
    { 
        id: '1', 
        title: 'Clay Modeling - Farm Animals', 
        date: '2026-03-01', 
        student: 'Alice Wambui', 
        type: 'image',
        url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80', 
        likes: 12, 
        area: 'Creative Arts',
        tags: ['Sculpture', 'Animals']
    },
    { 
        id: '2', 
        title: 'Drawing: My Neighborhood', 
        date: '2026-02-28', 
        student: 'Sarah Njeri', 
        type: 'image',
        url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500&q=80', 
        likes: 8, 
        area: 'Language',
        tags: ['Drawing', 'Community']
    },
    { 
        id: '3', 
        title: 'Number Chart Construction', 
        date: '2026-02-25', 
        student: 'John Kamau', 
        type: 'image',
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80', 
        likes: 15, 
        area: 'Mathematics',
        tags: ['Counting', 'Visual Aid']
    }
];

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<PortfolioItem[]>(initialMockData);

    const addItem = (item: Omit<PortfolioItem, 'id' | 'likes' | 'date'>) => {
        const newItem: PortfolioItem = {
            ...item,
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString().split('T')[0],
            likes: 0
        };
        setItems(prev => [newItem, ...prev]);
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const updateItem = (id: string, updates: Partial<PortfolioItem>) => {
        setItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
    };

    return (
        <PortfolioContext.Provider value={{ items, addItem, removeItem, updateItem }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
