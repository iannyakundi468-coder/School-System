import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'glass-button font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2';
  
  let variantStyles = '';
  
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-emerald-600/80 hover:bg-emerald-500/90 border-emerald-400/30 text-white shadow-lg shadow-emerald-500/20';
      break;
    case 'secondary':
      variantStyles = 'bg-rose-600/80 hover:bg-rose-500/90 border-rose-400/30 text-white shadow-lg shadow-rose-500/20';
      break;
    case 'glass':
    default:
      variantStyles = 'bg-white/10 hover:bg-white/20 border-white/10 text-white';
      break;
  }

  // Combine classes manually since we don't have clsx/tailwind-merge installed yet (waiting on npm install)
  // Once installed, we can refactor.
  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
