import React from 'react';

interface IconProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size = 'md',
  color,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const colorClass = color ? `text-${color}` : '';

  return (
    <div className={`inline-flex ${sizeClasses[size]} ${colorClass} ${className}`}>
      {icon}
    </div>
  );
};

export default Icon;