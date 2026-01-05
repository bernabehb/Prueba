import React, { useState } from 'react';
import SearchInput from '../../../../components/ui/SearchInput';
import Modal from '../../../../components/ui/Modal';
import Pagination from '../../../../components/ui/Pagination';
import Button from '../../../../components/form/Button';
import ProductosTable from '../components/ProductosTable';
import ProductoForm from '../components/ProductoForm';

const Productos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Producto 1',
      categoria: 'Electrónica',
      marca: 'Samsung',
      precio: '599.99',
      existencia: 12,
      creadoEn: '2024-01-15'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      categoria: 'Hogar',
      marca: 'LG',
      precio: '299.99',
      existencia: 0,
      creadoEn: '2024-01-20'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      categoria: 'Deportes',
      marca: 'Nike',
      precio: '89.99',
      existencia: 26,
      creadoEn: '2024-01-25'
    },
    {
      id: 4,
      nombre: 'Producto 4',
      categoria: 'Tecnología',
      marca: 'Apple',
      precio: '999.99',
      existencia: 17,
      creadoEn: '2024-01-30'
    }
    ,
    {
      id: 5,
      nombre: 'Producto 5',
      categoria: 'Tecnología',
      marca: 'Apple',
      precio: '999.99',
      existencia: 0,
      creadoEn: '2024-01-30'
    }
    ,
    {
      id: 6,
      nombre: 'Producto 6',
      categoria: 'Tecnología',
      marca: 'Apple',
      precio: '999.99',
      existencia: 17,
      creadoEn: '2024-01-30'
    }
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    categoria: '',
    marca: '',
    precio: '',
    existencia: '',
    creadoEn: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.marca.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const productosActuales = productosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (producto) => {
    setProductoSeleccionado({ ...producto });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    
    setProductos(
      productos.map((p) =>
        p.id === productoSeleccionado.id ? productoSeleccionado : p
      )
    );

    setIsEditModalOpen(false);
    setProductoSeleccionado(null);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setProductoSeleccionado(null);
  };

  const handleAdd = () => {
    setNuevoProducto({
      nombre: '',
      categoria: '',
      marca: '',
      precio: '',
      existencia: '',
      creadoEn: ''
    });
    setIsAddModalOpen(true);
  };

  const handleSaveAdd = (e) => {
    e.preventDefault();
    
    const productoConId = {
      ...nuevoProducto,
      id: productos.length + 1
    };

    setProductos([...productos, productoConId]);
    setIsAddModalOpen(false);
  };

  const handleCancelAdd = () => {
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="container-max">
      <div className="card-section">
        <div className="table-container">
          <div className="table-header">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Productos
              </h2>
            </div>

            <div className="table-controls px-1">
              <button
                onClick={handleAdd}
                className="download-btn flex items-center justify-center gap-2 px-3 sm:px-4 w-full sm:w-auto text-sm sm:text-base"
              >
                <i className="fa-solid fa-plus sm:hidden"></i>
                <span>Agregar producto</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 px-1">
            <div className="relative flex-1">
              <SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
              />
            </div>
          </div>

          <ProductosTable
            productos={productosActuales}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <div className="table-footer">
            <div className="table-info text-xs sm:text-sm">
              Mostrando {indexOfFirstItem + 1} a{' '}
              {Math.min(indexOfLastItem, productosFiltrados.length)} de{' '}
              {productosFiltrados.length} productos
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={handleCancelAdd}
        title="Agregar Producto"
        footer={
          <>
            <Button onClick={handleCancelAdd} className="btn-cancel">
              Cancelar
            </Button>
            <Button onClick={handleSaveAdd} className="btn-save">
              Agregar
            </Button>
          </>
        }
      >
        <form onSubmit={handleSaveAdd}>
          <ProductoForm
            producto={nuevoProducto}
            onChange={setNuevoProducto}
          />
        </form>
      </Modal>

 
      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCancelEdit}
        title="Editar Producto"
        footer={
          <>
            <Button onClick={handleCancelEdit} className="btn-cancel">
              Cancelar
            </Button>
            <Button onClick={handleSaveEdit} className="btn-save">
              Guardar Cambios
            </Button>
          </>
        }
      >
        <form onSubmit={handleSaveEdit}>
          {productoSeleccionado && (
            <ProductoForm
              producto={productoSeleccionado}
              onChange={setProductoSeleccionado}
            />
          )}
        </form>
      </Modal>
    </div>
  );
};

export default Productos;