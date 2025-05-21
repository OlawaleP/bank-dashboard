import React from 'react';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`rounded-full bg-primary-light text-white flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <span className="font-medium text-sm">SJ</span>
    </div>
  );
};