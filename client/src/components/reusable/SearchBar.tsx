import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  handleSearch: () => void;
}

const SearchBar = ({ value, onChange, onClearSearch, handleSearch }:SearchBarProps) => {
  return (
    <div className="w-80 flex items-center px-4 min-h-[40px] bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent outline-none "
        value={value}
        onChange={onChange}
      />
      
      {value && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-xl text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
