import React from 'react';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

interface QuickAccessCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  className?: string;
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({
  icon,
  title,
  onClick,
  className = '',
}) => {
  return (
    <button
      className={`flex items-center space-x-3 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full text-left ${className}`}
      onClick={onClick}
    >
      <div className="flex-shrink-0 rounded-full p-2 bg-primary/10 text-primary">
        <Icon icon={icon} />
      </div>
      <Text weight="medium">{title}</Text>
      
      <div className="ml-auto text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </button>
  );
};

export default QuickAccessCard;