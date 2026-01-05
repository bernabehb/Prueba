import React from 'react';
import { FaTrashAlt, FaPen } from "react-icons/fa";

const ProductosTable = ({ productos, onEdit, onDelete }) => {
  return (
    <div className="table-container overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="overflow-hidden">
          <table className="data-table min-w-full">
            <thead>
              <tr>
                <th className="table-p">Nombre</th>
                <th className="table-p">Categoría</th>
                <th className="table-p">Marca</th>
                <th className="table-p">Precio</th>
                <th className="table-p">Existencia</th>
                <th className="table-p">Creado en</th>
                <th className="table-p">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td className="table-p md:text-base">{producto.nombre}</td>
                  <td className="table-p md:text-base">{producto.categoria}</td>
                  <td className="table-p md:text-base">{producto.marca}</td>
                  <td className="table-p md:text-base">${producto.precio}</td>
                  <td className="px-4 sm:px-4 md:px-6 py-3 sm:py-4">
                    <span
                      className={`${
                        producto.existencia > 0 ? 'status-activo' : 'status-inactivo'
                      } text-xs sm:text-sm`}
                    >
                      {producto.existencia}
                    </span>
                  </td>
                  <td className="table-p md:text-base">{producto.creadoEn}</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex gap-2 sm:gap-3">
                      <button
                        className="action-icons p-1 cursor-pointer"
                        onClick={() => onDelete(producto.id)}
                        aria-label="Eliminar producto"
                        title="Eliminar"
                      >
                        <FaTrashAlt className="text-base sm:text-lg" />
                      </button>
                      <button
                        className="action-icons p-1 cursor-pointer"
                        onClick={() => onEdit(producto)}
                        aria-label="Editar producto"
                        title="Editar"
                      >
                        <FaPen className="text-base sm:text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductosTable;