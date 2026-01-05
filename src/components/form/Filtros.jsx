import React from 'react';
import Button from './Button';

const Filtros = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex bg-gray-700 rounded-lg overflow-hidden w-full sm:w-auto">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant="filtro"
          onClick={() => onFilterChange(filter.id)}
          className={activeFilter === filter.id ? 'bg-gray-500' : ''}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default Filtros;