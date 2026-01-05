import React from 'react';
import TextInput from '../../../../components/form/TextInput';

const ClienteForm = ({ cliente, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...cliente, [field]: value });
  };

  return (
    <div className="space-y-5">
      <TextInput
        id="editUsuario"
        label="Usuario"
        value={cliente.nombre || ''}
        onChange={(e) => handleChange('nombre', e.target.value)}
        required
      />

      <TextInput
        id="editEmail"
        type="email"
        label="Email"
        value={cliente.email || ''}
        onChange={(e) => handleChange('email', e.target.value)}
        required
      />

      <TextInput
        id="editTelefono"
        label="Teléfono"
        value={cliente.telefono || ''}
        onChange={(e) => handleChange('telefono', e.target.value)}
        required
      />

      <TextInput
        id="editDireccion"
        label="Dirección"
        value={cliente.direccion || ''}
        onChange={(e) => handleChange('direccion', e.target.value)}
        required
      />

      <TextInput
        id="editGenero"
        label="Género"
        value={cliente.genero || ''}
        onChange={(e) => handleChange('genero', e.target.value)}
        required
      />

      <TextInput
        id="editEstado"
        label="Estado"
        value={cliente.estado || ''}
        onChange={(e) => handleChange('estado', e.target.value)}
        required
      />
    </div>
  );
};

export default ClienteForm;