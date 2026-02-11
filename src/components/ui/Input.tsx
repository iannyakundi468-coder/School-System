import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, className = '', icon, ...props }) => {
    return (
        <div className={`space-y-1 ${className}`}>
            <label className="block text-sm font-medium text-gray-300 ml-1">
                {label}
            </label>
            <div className="relative">
                <input
                    className={`glass-input w-full ${icon ? 'pl-10' : ''} transition-all duration-200 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50`}
                    {...props}
                />
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
};
