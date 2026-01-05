import React from 'react';

const PerfilHeader = ({ perfil }) => {
  return (
    <div className="card-section">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
          <img 
            src={perfil.foto} 
            alt={`${perfil.nombre} ${perfil.apellido}`}
            className="profile-avatar" 
          />
          <div>
            <h1 className="profile-name">{perfil.nombre} {perfil.apellido}</h1>
            <p className="profile-subtitle">
              {perfil.cargo} | {perfil.ciudad}, {perfil.estado}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilHeader;