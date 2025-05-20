import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

interface NavItemProps {
  icon: string;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-md transition-colors ${
        active ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'
      }`}
    >
      <Icon name={icon} className={`w-5 h-5 ${active ? 'text-white' : 'text-gray-300'}`} />
      <Text className={`ml-3 ${active ? 'text-white font-medium' : 'text-gray-300'}`}>{label}</Text>
    </Link>
  );
};

interface SidebarProps {
  logo?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ logo = '/logo.svg' }) => {
  const location = useLocation();
  const path = location.pathname;

  const mainNavigation = [
    { icon: 'dashboard', label: 'Dashboard', to: '/' },
    { icon: 'branch', label: 'Branches', to: '/branches' },
    { icon: 'roles', label: 'Roles', to: '/roles' },
    { icon: 'users', label: 'Users', to: '/users' },
    { icon: 'scheme', label: 'Card Scheme', to: '/card-scheme' },
    { icon: 'profile', label: 'Card Profile', to: '/card-profile' },
    { icon: 'request', label: 'Card Request', to: '/card-request' },
    { icon: 'stock', label: 'Stock', to: '/stock' },
    { icon: 'cards', label: 'Cards', to: '/cards' },
  ];

  const secondaryNavigation = [
    { icon: 'auth-list', label: 'Authorization List', to: '/authorization-list' },
    { icon: 'auth-queue', label: 'Authorization Queue', to: '/authorization-queue' },
    { icon: 'trail', label: 'Trail', to: '/trail' },
    { icon: 'account', label: 'Account', to: '/account' },
  ];

  return (
    <div className="h-screen w-56 bg-primary-dark flex flex-col">
      <div className="p-4 flex items-center">
        <img src={logo} alt="LAPO" className="h-10" />
      </div>
      
      <div className="px-4 py-2">
        <Text className="text-gray-400 text-xs uppercase tracking-wider">MAIN MENU</Text>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2">
        {mainNavigation.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            active={path === item.to}
          />
        ))}
        
        <div className="mt-6 px-2">
          <Text className="text-gray-400 text-xs uppercase tracking-wider">ADMINISTRATION</Text>
        </div>
        
        {secondaryNavigation.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            active={path === item.to}
          />
        ))}
      </div>
      
      <div className="p-4 mt-auto">
        <Link
          to="/logout"
          className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
        >
          <Icon name="logout" className="w-5 h-5" />
          <Text className="ml-3">Logout</Text>
        </Link>
        
        <div className="mt-4 text-center text-xs text-gray-500">
          <Text>POWERED BY</Text>
          <div className="mt-1 flex justify-center">
            <img src="/cardinfra-logo.svg" alt="Cardinfra" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;