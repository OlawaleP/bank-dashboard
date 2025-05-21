import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import arrowUp from '../../assets/icons/arrowUp.svg'

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: string;
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
  const isPendingRequests = title === "Pending Requests";
  
  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex flex-col w-full">
        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 mb-2">
          {icon && (
            <img src={icon} alt={`${title} icon`} className="w-5 h-5" />
          )}
          <Text as="h3" size="sm" color="black" className="truncate max-w-full">
            {title}
          </Text>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mt-1">
          <Text as="div" size="2xl" weight="bold" color='textColor-100' className="mb-2 sm:mb-0 truncate max-w-full">
            {value}
          </Text>
          
          {trend && (
            <div className="flex items-center flex-wrap">
              {!isPendingRequests ? (
                <>
                  <div className={`flex items-center py-1 px-1.5 bg-card2 rounded-[4px] ${trend.isPositive ? 'text-textColor-400' : 'text-red-500'}`}>
                    {trend.isPositive ? (
                      <img src={arrowUp} alt="Up trend" className="w-3 h-3" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 13a1 1 0 110 2H7a1 1 0 01-1-1v-5a1 1 0 112 0v2.586l4.293-4.293a1 1 0 011.414 0L16 9.586V7a1 1 0 112 0v5a1 1 0 01-1 1h-5z" clipRule="evenodd" />
                      </svg>
                    )}
                    <Text size="sm" weight="medium" className="ml-1">
                      {(title === "Total Active Cards" || title === "Today's Revenue") && trend.value > 0 ? `+${trend.value}` : trend.value}%
                    </Text>
                  </div>
                  <Text size="xs" color="gray-500" className="ml-2 truncate">
                    {trend.label}
                  </Text>
                </>
              ) : (
                <div className="flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M6 4V6M6 8H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#E78020" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <Text size="xs" color="orange-500">
                    {trend.label}
                  </Text>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;