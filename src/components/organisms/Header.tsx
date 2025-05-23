import React from 'react';
import Icon from '../atoms/Icon'; 
import { NotificationIcon } from '../atoms/icons/NotificationIcon';
import { SearchBar } from '../molecules/SearchBar';
import { UserMenu } from '../molecules/UserMenu';
import dashboard from '../../assets/icons/dashboard.svg';
import menuIcon from '../../assets/icons/menuIcon.svg'; 
import Text from '../atoms/Text';

interface UserInfo {
  firstName: string;
  lastName: string;
  lastLogin: Date;
}

interface HeaderProps {
  user: UserInfo;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="mr-4 lg:hidden flex items-center justify-center"
          >
            <img src={menuIcon} alt="Menu" className="w-5 h-5" />
          </button>
        )}
        
        <a href="/dashboard" className="flex items-center mr-10">
          <img src={dashboard} alt="Dashboard" className="mr-3 w-4 h-4" />
          <Text size='xs' color='#001735'>Dashboard</Text>
        </a>
      </div>
      
      <div className='flex items-center space-x-5'>
        <div className="hidden md:flex flex-1 justify-center">
          <SearchBar />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-primary transition-colors flex items-center">
            <Icon icon={<NotificationIcon />} size="sm" />
            <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <UserMenu user={user} />
        </div>
      </div>
    </header>
  );
};