import React from 'react';
import TextInput from '../../../../components/form/TextInput';

const ProductoForm = ({ producto, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...producto, [field]: value });
  };

  return (
    <div className="space-y-5">
      <TextInput
        id="nombre"
        label="Nombre"
        value={producto.nombre || ''}
        onChange={(e) => handleChange('nombre', e.target.value)}
        required
      />

      <TextInput
        id="categoria"
        label="Categoría"
        value={producto.categoria || ''}
        onChange={(e) => handleChange('categoria', e.target.value)}
        required
      />

      <TextInput
        id="marca"
        label="Marca"
        value={producto.marca || ''}
        onChange={(e) => handleChange('marca', e.target.value)}
        required
      />

      <TextInput
        id="precio"
        type="number"
        label="Precio"
        value={producto.precio || ''}
        onChange={(e) => handleChange('precio', e.target.value)}
        required
      />

      <TextInput
        id="existencia"
        type="number"
        label="Existencia"
        value={producto.existencia || ''}
        onChange={(e) => handleChange('existencia', e.target.value)}
        required
      />

      <TextInput
        id="creadoEn"
        type="date"
        label="Creado en"
        value={producto.creadoEn || ''}
        onChange={(e) => handleChange('creadoEn', e.target.value)}
        required
      />
    </div>
  );
};

export default ProductoForm;