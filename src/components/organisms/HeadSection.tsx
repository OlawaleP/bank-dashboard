import React from 'react';
import Text from '../atoms/Text';
import { UserInfo } from '../../types/index';
import { format } from 'date-fns';

interface HeaderProps {
  user: UserInfo;
  className?: string;
}

const HeadSection: React.FC<HeaderProps> = ({
  user,
  className = '',
}) => {
  const today = new Date();
  const formattedDate = format(today, 'dd MMM yyyy');

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
        <div className="w-full sm:w-auto">
          <Text as="h1" size="lg" weight="semibold" color='textColor-200' className="truncate">
            Hi {user.firstName}, what would you like to do today?
          </Text>
          <Text size="xs" color="textColor-100" className="mt-1">
            Last login: {format(user.lastLogin, 'dd/MM/yyyy HH:mm:ss')}
          </Text>
        </div>

        <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-2 w-full sm:w-auto justify-center sm:justify-start min-w-min shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <Text size="xs" color='textColor-100' className="shrink-0">Today</Text>
          <Text size="xs" className="mx-2 shrink-0" color='textColor-100'>|</Text>
          <Text size="xs" color='textColor-100' weight='thin' className="shrink-0">{formattedDate}</Text>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;