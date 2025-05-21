import React from 'react';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = 'Search', 
  className = '' 
}) => {
  return (
    <input
      type="text"
      className={`rounded-full px-4 py-2 w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm ${className}`}
      placeholder={placeholder}
    />
  );
};