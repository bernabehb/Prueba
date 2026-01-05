import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden"> 
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />

      <div className="lg:ml-64 min-h-screen flex flex-col">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={sidebarOpen} 
        />

        <main className="flex-1 pt-24 lg:pt-8 pb-8">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;