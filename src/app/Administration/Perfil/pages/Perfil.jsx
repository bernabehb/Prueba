import React, { useState } from 'react';
import Modal from '../../../../components/ui/Modal';
import Button from '../../../../components/form/Button';
import PerfilHeader from '../components/PerfilHeader';
import InfoCard from '../components/InfoCard';
import PerfilPersonalForm from '../components/PerfilPersonalForm';
import PerfilUbicacionForm from '../components/PerfilUbicacionForm';

const Perfil = () => {
  const [perfil, setPerfil] = useState({
    nombre: 'Bernabe',
    apellido: 'Hernandez',
    correo: 'berna25d@gmail.com',
    telefono: '+52 771144163',
    cargo: 'Practicante',
    ciudad: 'Monterrey',
    estado: 'N.L.',
    codigoPostal: '64000',
    colonia: 'Xxxxxxxxx',
    foto: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'
  });

  const [perfilTemp, setPerfilTemp] = useState(null);
  
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
  const [isUbicacionModalOpen, setIsUbicacionModalOpen] = useState(false);

  const handleEditPersonal = () => {
    setPerfilTemp({ ...perfil });
    setIsPersonalModalOpen(true);
  };

  const handleSavePersonal = (e) => {
    e.preventDefault();
    setPerfil(perfilTemp);
    setIsPersonalModalOpen(false);
    setPerfilTemp(null);
  };

  const handleCancelPersonal = () => {
    setIsPersonalModalOpen(false);
    setPerfilTemp(null);
  };

  const handleEditUbicacion = () => {
    setPerfilTemp({ ...perfil });
    setIsUbicacionModalOpen(true);
  };

  const handleSaveUbicacion = (e) => {
    e.preventDefault();
    setPerfil(perfilTemp);
    setIsUbicacionModalOpen(false);
    setPerfilTemp(null);
  };

  const handleCancelUbicacion = () => {
    setIsUbicacionModalOpen(false);
    setPerfilTemp(null);
  };

  const datosPersonales = [
    { label: 'Nombre', value: perfil.nombre },
    { label: 'Apellido', value: perfil.apellido },
    { label: 'Correo', value: perfil.correo },
    { label: 'Teléfono', value: perfil.telefono },
    { label: 'Cargo', value: perfil.cargo, fullWidth: true }
  ];

  const datosUbicacion = [
    { label: 'Ciudad', value: perfil.ciudad },
    { label: 'Estado', value: perfil.estado },
    { label: 'Código Postal', value: perfil.codigoPostal },
    { label: 'Colonia', value: perfil.colonia }
  ];

  return (
    <div className="container-max">
      <PerfilHeader perfil={perfil} />
      <InfoCard
        title="Información Personal"
        data={datosPersonales}
        onEdit={handleEditPersonal}
      />
      <InfoCard
        title="Ubicación"
        data={datosUbicacion}
        onEdit={handleEditUbicacion}
        isLast={true}
      />

      <Modal
        isOpen={isPersonalModalOpen}
        onClose={handleCancelPersonal}
        title="Editar Información Personal"
        footer={
          <>
            <Button 
              onClick={handleCancelPersonal}
              className="btn-cancel"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSavePersonal}
              className="btn-save"
            >
              Guardar Cambios
            </Button>
          </>
        }
      >
        <form onSubmit={handleSavePersonal}>
          {perfilTemp && (
            <PerfilPersonalForm
              perfil={perfilTemp}
              onChange={setPerfilTemp}
            />
          )}
        </form>
      </Modal>

      <Modal
        isOpen={isUbicacionModalOpen}
        onClose={handleCancelUbicacion}
        title="Editar Ubicación"
        footer={
          <>
            <Button
              onClick={handleCancelUbicacion}
              className="btn-cancel"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSaveUbicacion}
              className="btn-save"
            >
              Guardar Cambios
            </Button>
          </>
        }
      >
        <form onSubmit={handleSaveUbicacion}>
          {perfilTemp && (
            <PerfilUbicacionForm
              perfil={perfilTemp}
              onChange={setPerfilTemp}
            />
          )}
        </form>
      </Modal>
    </div>
  );
};

export default Perfil;