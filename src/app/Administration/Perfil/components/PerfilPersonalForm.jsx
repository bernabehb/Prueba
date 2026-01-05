import React from 'react';
import TextInput from '../../../../components/form/TextInput';

const PerfilPersonalForm = ({ perfil, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...perfil, [field]: value });
  };

  return (
    <div className="space-y-5">
      <TextInput
        id="editNombre"
        label="Nombre"
        value={perfil.nombre || ''}
        onChange={(e) => handleChange('nombre', e.target.value)}
        required
      />

      <TextInput
        id="editApellido"
        label="Apellido"
        value={perfil.apellido || ''}
        onChange={(e) => handleChange('apellido', e.target.value)}
        required
      />

      <TextInput
        id="editCorreo"
        type="email"
        label="Correo"
        value={perfil.correo || ''}
        onChange={(e) => handleChange('correo', e.target.value)}
        required
      />

      <TextInput
        id="editTelefono"
        label="Teléfono"
        value={perfil.telefono || ''}
        onChange={(e) => handleChange('telefono', e.target.value)}
        required
      />

      <TextInput
        id="editCargo"
        label="Cargo"
        value={perfil.cargo || ''}
        onChange={(e) => handleChange('cargo', e.target.value)}
        required
      />
    </div>
  );
};

export default PerfilPersonalForm;