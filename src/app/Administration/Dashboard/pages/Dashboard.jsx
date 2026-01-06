import React, { useState, useMemo } from 'react';
import EstadisticasCard from '../../../../components/form/EstadisticasCard';
import Filtros from '../../../../components/form/Filtros';
import DataTable from '../../../../components/form/Datatable';
import SeguimientoCard from '../../../../components/form/SeguimientosCard';
import EstadisticasGrafic from '../../../../components/form/EstadisticasGrafic';
import { Package } from "lucide-react";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const estadisticas = [ 
    {
      value: "2,384",
      label: "Pedidos totales",
      percent: 20,
      positive: true,
      icon: <Package size={22} />
    },
    {
      value: "384",
      label: "Pedidos pendientes",
      percent: 8,
      positive: false,
      icon: <Package size={22} />
    },
    {
      value: "2,453",
      label: "Pedidos entregados",
      percent: 12,
      positive: true,
      icon: <Package size={22} />
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'entregados', label: 'Entregados' },
    { id: 'otros', label: 'Otros' }
  ];

  const tableHeaders = ['#ID de pedido', 'Categoría', 'Compañía', 'Hora de llegada', 'Ruta', 'Precio', 'Estado'];

  const actividades = [
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'R 333', '$2,150.89', 'Entregado'] },
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'A 354', '$2,150.89', 'Entregado'] },
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'A 376', '$2,150.89', 'En tránsito'] },
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'R 344', '$2,150.89', 'Entregado'] },
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'F 083', '$2,150.89', 'Entregado'] },
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'G 093', '$2,150.89', 'Pendiente'] },
    { id: '#324112', datos: ['Automotriz', 'AutoParts Co.', '18 mar. 2025 16:00', 'H 837', '$2,150.89', 'Entregado'] },
  ];

  const actividadesFiltradas = useMemo(() => {
    return actividades.filter((item) => {
      const estadoItem = item.datos[5];

      if (activeFilter === 'todos') return true;
      if (activeFilter === 'entregados') {
        return estadoItem === 'Entregado';
      }

      if (activeFilter === 'otros') {
        return estadoItem === 'Pendiente' || estadoItem === 'En tránsito';
      }

      return true;
    });
  }, [activeFilter]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {estadisticas.map((stat, index) => (
          <EstadisticasCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
        <div className="lg:col-span-2">
          <EstadisticasGrafic />
        </div>
        <SeguimientoCard />
      </div>

      <div className="card-section">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h2 className="section-title text-base sm:text-lg">Actividades de entrega</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Realice un seguimiento de sus actividades de envío recientes</p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <Filtros
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </div>
        <DataTable headers={tableHeaders} data={actividadesFiltradas} />
      </div>
    </>
  );
};

export default Dashboard;