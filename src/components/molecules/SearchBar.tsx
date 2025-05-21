import React from 'react';
import { SearchInput } from '../atoms/SearchInput';
import search from '../../assets/icons/search.svg'


export const SearchBar: React.FC = () => {
  return (
    <div className="relative flex-1 max-w-md">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <img src={search} alt="Dashboard" className="mr-2 w-4 h-4"  />
      </div>
      <SearchInput className="pl-8" placeholder="Search" />
    </div>
  );
};