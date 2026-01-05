import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="relative w-full sm:w-auto">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
      />
      <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
    </div>
  );
};

export default SearchInput;