import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  className = '',
}) => {
  return (
    <Card className={`${className}`}>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          {icon && (
            <div className="mr-2 text-gray-400">
              {icon}
            </div>
          )}
          <Text as="h3" size="sm" color="gray-500">
            {title}
          </Text>
        </div>
        
        <div className="flex items-baseline justify-between">
          <Text as="div" size="3xl" weight="bold">
            {value}
          </Text>
          
          {trend && (
            <div className="flex items-center">
              <div className={`flex items-center ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend.isPositive ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 13a1 1 0 110 2H7a1 1 0 01-1-1v-5a1 1 0 112 0v2.586l4.293-4.293a1 1 0 011.414 0L16 9.586V7a1 1 0 112 0v5a1 1 0 01-1 1h-5z" clipRule="evenodd" />
                  </svg>
                )}
                <Text size="sm" weight="medium" className="ml-1">
                  {trend.value}%
                </Text>
              </div>
              <Text size="xs" color="gray-500" className="ml-2">
                {trend.label}
              </Text>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;