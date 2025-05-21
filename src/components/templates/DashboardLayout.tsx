import React from 'react';
import Sidebar from '../organisms/Sidebar';
import { UserInfo } from '../../types';
import { Header } from '../organisms/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

  const user: UserInfo = {
    name: 'Sarah Johnson',
    lastLogin: new Date(2025, 4, 19, 14, 30, 0),
  };

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-background-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;