import React from 'react';
import EtiquetaEstado from '../../../../components/ui/EtiquetaEstado';
import { FaTrashAlt, FaPen } from "react-icons/fa";

const ClientesTable = ({ clientes, onEdit, onDelete }) => {
  return (
    <div className="table-container overflow-x-auto sm:mx-0">
      <div className="inline-block min-w-full">
        <div className="overflow-hidden">
          <table className="data-table min-w-full">
            <thead>
              <tr>
                <th className="px-3 sm:px-4 md:px-6">USUARIO</th>
                <th className="px-3 sm:px-4 md:px-6">TELÉFONO</th>
                <th className="px-3 sm:px-4 md:px-6">DIRECCIÓN</th>
                <th className="px-3 sm:px-4 md:px-6">GÉNERO</th>
                <th className="px-3 sm:px-4 md:px-6">ESTADO</th>
                <th className="px-3 sm:px-4 md:px-6">ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="min-w-0">
                        <div className="user-name">{cliente.nombre}</div>
                        <div className="user-email">{cliente.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-p">{cliente.telefono}</td>
                  <td className="table-p">{cliente.direccion}</td>
                  <td className="table-p">{cliente.genero}</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <EtiquetaEstado status={cliente.estado} />
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex gap-2 sm:gap-3">
                      <button
                        className="action-icons p-1 cursor-pointer"
                        onClick={() => onDelete(cliente.id)}
                        aria-label="Eliminar cliente"
                        title="Eliminar"
                      >
                        <FaTrashAlt className="text-base sm:text-lg " />
                      </button>
                      <button
                        className="action-icons p-1 cursor-pointer"
                        onClick={() => onEdit(cliente)}
                        aria-label="Editar cliente"
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

export default ClientesTable;