import React from 'react';

interface TextProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xx' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'thin' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  color,
  className = '',
}) => {
  const sizeClasses = {
    xx: 'text-[8.5px]',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };

  const weightClasses = {
    thin: 'font-thin',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClass = color ? `text-${color}` : '';

  return (
    <Component 
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${colorClass} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Text;