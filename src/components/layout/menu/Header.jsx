import React from 'react';
import logoCompers from '../../../assets/images/images.png';
import { LuAlignJustify } from "react-icons/lu";

const Header = ({ toggleSidebar, isSidebarOpen }) => { 
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 h-16 bg-white/80 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 lg:hidden transition-opacity duration-300 ${
        isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex items-center h-full px-3"> 
        
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-lg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition focus:outline-none"
          aria-label="Abrir menú"
        >
          <LuAlignJustify className="h-7 w-7" />
        </button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img 
            src={logoCompers} 
            alt="Logo Compers" 
            className="h-40 w-40 rounded-lg object-contain" 
          />
        </div>

        <div className="w-12 h-12" />
      </div>
    </header>
  );
};

export default Header;