import React from 'react';
import IconRegistry from './SidebarIconRegistry';

interface IconProps {
  name: string;
  className?: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = '', alt = '' }) => {
  const iconSrc = IconRegistry[name];
  
  if (!iconSrc) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }
  
  return (
    <img 
      src={iconSrc} 
      alt={alt || `${name} icon`}
      className={className} 
    />
  );
};

export default Icon;