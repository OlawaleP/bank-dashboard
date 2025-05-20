import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
        </div>
      </div>
      <span className="ml-2 font-bold text-blue-900">
        <span className="text-orange-500">LAPO</span>
      </span>
    </div>
  );
};

export default Logo;