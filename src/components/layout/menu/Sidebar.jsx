import React from 'react';
import { NavLink } from 'react-router-dom';
import logoCompers from '../../../assets/images/images.png';
import { useNavigate } from 'react-router-dom';
import { LuChartSpline } from "react-icons/lu";
import { FaUsers, FaUser } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineProduct } from "react-icons/ai";

const Sidebar = ({ isOpen, toggleSidebar, closeSidebar }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { path: '/dashboard', icon: LuChartSpline, label: 'Dashboard' },
    { path: '/clientes', icon: FaUsers, label: 'Clientes' },
    { path: '/perfil', icon: FaUser, label: 'Perfil' },
    { path: '/productos', icon: AiOutlineProduct, label: 'Productos' }
  ];

  const handleLogout = () => {
    closeSidebar();
    navigate('/login');
  };

  return (
    <>
      <nav className={`nav ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="nav-content">
          <div className="nav-header">
            <img src={logoCompers} alt="Logo Compers" className="nav-logo" />
          </div>

          <div className="nav-menu">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `nav-item ${isActive ? 'nav-item-active' : ''}`
                      }
                      end
                    >
                      <Icon className="h-5 w-5" />
                      <span className="nav-item-text">{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}

              <li>
                <button
                  onClick={handleLogout}
                  className="nav-item logout-item w-full cursor-pointer"
                >
                  <AiOutlineLogout className="h-5 w-5" />
                  <span className="nav-item-text">Cerrar Sesión</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
};

export default Sidebar;