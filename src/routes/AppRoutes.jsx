import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../app/Login/pages/Login';
import Layout from '../components/layout/menu/Layout';
import Dashboard from '../app/Administration/Dashboard/pages/Dashboard';
import Clientes from '../app/Administration/Clientes/pages/Clientes';
import Perfil from '../app/Administration/Perfil/pages/Perfil';
import Productos from '../app/Administration/Productos/pages/Productos';
import NotFound from '../components/layout/error/NotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="productos" element={<Productos />} />

    
        </Route>
              <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes;