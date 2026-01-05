import React, { useState } from 'react';
import SearchInput from '../../../../components/ui/SearchInput';
import Modal from '../../../../components/ui/Modal';
import Pagination from '../../../../components/ui/Pagination';
import Button from '../../../../components/form/Button';
import ClientesTable from '../components/ClientesTable';
import ClienteForm from '../components/ClienteForm';

const Clientes = () => {
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: 'Usuario 1',
      email: 'usuario1@compers.com',
      telefono: '555-1234',
      direccion: 'Calle Principal 123',
      genero: 'Masculino',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Usuario 2',
      email: 'usuario2@compers.com',
      telefono: '555-5678',
      direccion: 'Avenida Central 456',
      genero: 'Femenino',
      estado: 'Inactivo'
    },
    {
      id: 3,
      nombre: 'Usuario 3',
      email: 'usuario3@compers.com',
      telefono: '555-9012',
      direccion: 'Boulevard Norte 789',
      genero: 'Masculino',
      estado: 'Activo'
    }
    ,
    {
      id: 4,
      nombre: 'Usuario 4',
      email: 'usuario3@compers.com',
      telefono: '555-9012',
      direccion: 'Boulevard Norte 789',
      genero: 'Masculino',
      estado: 'Inactivo'
    }
    ,
    {
      id: 5,
      nombre: 'Usuario 5',
      email: 'usuario3@compers.com',
      telefono: '555-9012',
      direccion: 'Boulevard Norte 789',
      genero: 'Masculino',
      estado: 'Activo'
    },
    {
      id: 6,
      nombre: 'Usuario 6',
      email: 'usuario3@compers.com',
      telefono: '555-9012',
      direccion: 'Boulevard Norte 789',
      genero: 'Masculino',
      estado: 'Activo'
    }

  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.telefono.includes(searchTerm)
  );

  const totalPages = Math.ceil(clientesFiltrados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const clientesActuales = clientesFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (cliente) => {
    setClienteSeleccionado({ ...cliente });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este cliente?')) {
      setClientes(clientes.filter((c) => c.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    setClientes(
      clientes.map((c) =>
        c.id === clienteSeleccionado.id ? clienteSeleccionado : c
      )
    );

    setIsModalOpen(false);
    setClienteSeleccionado(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setClienteSeleccionado(null);
  };

  const handleClienteChange = (clienteActualizado) => {
    setClienteSeleccionado(clienteActualizado);
  };

  return (
    <div className="container-max">
      <div className="card-section table-container">
        <div className="table-header">
          <div className="table-controls">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar clientes..."
            />
          </div>
        </div>

        <ClientesTable
          clientes={clientesActuales}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <div className="table-footer">
          <div className="table-info">
            Mostrando {indexOfFirstItem + 1} a{' '}
            {Math.min(indexOfLastItem, clientesFiltrados.length)} de{' '}
            {clientesFiltrados.length} clientes
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title="Editar Cliente"
        footer={
          <>
            <Button onClick={handleCancel} className="btn-cancel">
              Cancelar
            </Button>
            <Button onClick={handleSave} className="btn-save">
              Guardar Cambios
            </Button>
          </>
        }
      >
        <form onSubmit={handleSave}>
          {clienteSeleccionado && (
            <ClienteForm
              cliente={clienteSeleccionado}
              onChange={handleClienteChange}
            />
          )}
        </form>
      </Modal>
    </div>
  );
};

export default Clientes;