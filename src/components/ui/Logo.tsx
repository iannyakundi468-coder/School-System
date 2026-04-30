import React from 'react';

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
    className = '', 
    iconClassName = 'w-10 h-10', 
    textClassName = 'text-2xl font-bold tracking-tight',
    showText = true 
}) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img 
                src="/somobloom.svg" 
                alt="SomoBloom Logo" 
                className={`object-contain ${iconClassName}`} 
            />
            {showText && (
                <span className={textClassName}>SomoBloom</span>
            )}
        </div>
    );
};
