// Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Text from '../atoms/Text';
import logo from '../../assets/icons/lapo.svg';
import cardinfraLogo from '../../assets/icons/cardInfre.svg';
import Icon from '../atoms/SvgIcon';

interface NavItemProps {
  icon: string;
  label: string;
  to: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center px-4 py-3 rounded-md transition-colors group ${active ? 'bg-sideSelect' : 'hover:bg-sideSelect'
        }`}
    >
      <Icon
        name={icon}
        className={`w-[14.67px] h-[10.67px] transition-colors ${active ? 'text-iconBg' : 'text-sideText group-hover:text-iconBg'
          }`}
      />
      <Text
        size='xx'
        color={active ? undefined : '#7E8B9C'}
        className={`ml-3 transition-colors ${active ? 'text-iconBg' : 'text-sideText group-hover:text-iconBg'
          }`}
      >
        {label}
      </Text>
    </Link>
  );
};

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
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
    { icon: 'auth-list', label: 'Authorization List', to: '/authorization-list' },
    { icon: 'auth-queue', label: 'Authorization Queue', to: '/authorization-queue' },
    { icon: 'trail', label: 'Trail', to: '/trail' },
    { icon: 'account', label: 'Account', to: '/account' },
  ];

  const handleLinkClick = () => {
    if (onClose && window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <div 
      className={`fixed z-30 h-screen bg-sidebar flex flex-col transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } w-56`}
    >
      <button 
        className="absolute top-4 right-4 text-white lg:hidden"
        onClick={onClose}
      >
        <Icon name="close" className="w-5 h-5" />
      </button>
      
      <Link to="/" className="p-4 flex items-center" onClick={handleLinkClick}>
        <img src={logo} alt="LAPO" className="h-10" />
      </Link>

      <div className="flex-1 overflow-y-auto px-2">
        <NavItem
          key="/"
          icon="dashboard"
          label="Dashboard"
          to="/"
          active={path === '/'}
          onClick={handleLinkClick}
        />

        <div className="pl-6 py-2">
          <Text size='xx' className="text-textColor-600 uppercase tracking-wider">MAIN MENU</Text>
        </div>

        {mainNavigation.slice(1).map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            active={path === item.to}
            onClick={handleLinkClick}
          />
        ))}
      </div>

      <div className="">
        <Link
          to="/logout"
          className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
          onClick={handleLinkClick}
        >
          <Icon name="logout" className="w-[10.66px] h-[12px]" />
          <Text className="ml-3" size='xs'>Logout</Text>
        </Link>

        <div className="pl-7 mt-2 text-xs text-textColor-600">
          <Text size='xx'>POWERED BY</Text>
          <div className="my-2">
            <img src={cardinfraLogo} alt="Cardinfra" className="w-[93.33px] h-[41.41px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;