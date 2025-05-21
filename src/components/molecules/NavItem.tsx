import React from 'react';
import Icon from '../atoms/Icon'; 
import { HomeIcon } from '../atoms/icons/HomeIcon';

interface NavItemProps {
  iconName: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ 
  iconName, 
  label, 
  isActive = false, 
  onClick 
}) => {
  const getIconComponent = () => {
    switch (iconName) {
      case 'home':
        return <HomeIcon />;
      default:
        return null;
    }
  };

  return (
    <button
      className={`flex items-center ${isActive ? 'text-primary font-medium' : 'text-gray-600'} hover:text-primary transition-colors`}
      onClick={onClick}
    >
      <Icon 
        icon={getIconComponent()} 
        size="sm" 
        className="mr-2" 
        color={isActive ? 'primary' : 'gray-600'} 
      />
      <span>{label}</span>
    </button>
  );
};