import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/form/Button';
import TextInput from '../../../components/form/TextInput';
import logoCompers from '../../../assets/images/images.png';
import { showAlert } from '../../../components/ui/Alerts'; 

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const usuarioValido = {
    usuario: 'admin',
    password: '1234'
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const usuarioI = usuario.trim();
    const passwordI = password.trim();

    if (usuarioI === usuarioValido.usuario && passwordI === usuarioValido.password) {
      await showAlert.success('¡Bienvenido!', 'Iniciando sesión...');
      navigate('/');
    } else {
      showAlert.error('Error de acceso', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center body-content">
      <main className="w-full max-w-md px-6 sm:px-8 md:max-w-lg lg:max-w-xl">
        <div className="card-login">
          <div className="logo-container">
            <img 
              src={logoCompers} 
              alt="Logo Compers" 
              className="h-12 sm:h-14 md:h-16 w-auto" 
            />
          </div>

          <h3 className="title-login">Iniciar Sesión</h3>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <TextInput
              id="usuario"
              type="text"
              label="Usuario"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />

            <TextInput
              id="password"
              type="password"
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit">
              Iniciar sesión
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
