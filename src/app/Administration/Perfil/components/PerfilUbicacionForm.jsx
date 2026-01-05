import React from 'react';
import TextInput from '../../../../components/form/TextInput';

const PerfilUbicacionForm = ({ perfil, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...perfil, [field]: value });
  };

  return (
    <div className="space-y-5">
      <TextInput
        id="editCiudad"
        label="Ciudad"
        value={perfil.ciudad || ''}
        onChange={(e) => handleChange('ciudad', e.target.value)}
        required
      />

      <TextInput
        id="editEstado"
        label="Estado"
        value={perfil.estado || ''}
        onChange={(e) => handleChange('estado', e.target.value)}
        required
      />

      <TextInput
        id="editCodigoPostal"
        label="Código Postal"
        value={perfil.codigoPostal || ''}
        onChange={(e) => handleChange('codigoPostal', e.target.value)}
        required
      />

      <TextInput
        id="editColonia"
        label="Colonia"
        value={perfil.colonia || ''}
        onChange={(e) => handleChange('colonia', e.target.value)}
        required
      />
    </div>
  );
};

export default PerfilUbicacionForm;