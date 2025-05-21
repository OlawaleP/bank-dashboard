import React from 'react';
import { user } from '../../utils/data';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}


const firstInitial = user?.firstName?.charAt(0)?.toUpperCase() || '';

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
      <span className="font-medium text-sm">{firstInitial}</span>
    </div>
  );
};