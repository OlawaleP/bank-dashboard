import React, { useState } from 'react';
import { Avatar } from '../atoms/Avatar';
import { formatDistanceToNow } from 'date-fns';

interface UserInfo {
  name: string;
  lastLogin: Date;
}

interface UserMenuProps {
  user: UserInfo;
}

export const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const lastLoginFormatted = formatDistanceToNow(user.lastLogin, { addSuffix: true });

  return (
    <div className="relative">
      <button 
        className="flex items-center" 
        onClick={toggleMenu}
      >
        <Avatar size="sm" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10 border border-gray-100">
          <div className="flex items-center mb-4">
            <Avatar size="md" className="mr-3" />
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">Last login: {lastLoginFormatted}</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-2">
            <button className="w-full text-left py-2 px-1 text-sm hover:bg-gray-50 rounded">
              My Profile
            </button>
            <button className="w-full text-left py-2 px-1 text-sm hover:bg-gray-50 rounded">
              Settings
            </button>
            <button className="w-full text-left py-2 px-1 text-sm hover:bg-gray-50 rounded text-danger">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};