import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ className = '', children, onClick }) => {
    return (
        <div
            className={`glass-panel p-6 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
