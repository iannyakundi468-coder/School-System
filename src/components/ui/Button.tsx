import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 rounded-xl h-11 px-6 px-4';

  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20';
      break;
    case 'secondary':
      variantStyles = 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20';
      break;
    case 'outline':
      variantStyles = 'border-2 border-slate-200 text-slate-600 hover:bg-slate-50';
      break;
    case 'ghost':
      variantStyles = 'text-slate-500 hover:bg-slate-100 hover:text-slate-700';
      break;
    case 'glass':
    default:
      variantStyles = 'backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20';
      break;
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
