import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <h2 className="login-title">Entrar</h2>
        <div className="input-group">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="login-input"
            value={usuarioLogin.usuario}
            onChange={atualizarEstado}
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="login-input"
            value={usuarioLogin.senha}
            onChange={atualizarEstado}
          />
        </div>
        <button type="submit" className="login-button">
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Entrar</span>
          )}
        </button>
        <hr className="login-divider" />
        <p className="signup-text">
          Ainda não tem uma conta?{' '}
          <Link to="/cadastro" className="signup-link">
            Cadastre-se
          </Link>
        </p>
      </form>
      <div className="fundoLogin"></div>
    </div>
  );
}

export default Login;



/*
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const { nome, setNome } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='title-container'>
          <h2 className='login-title'>Logar</h2>
        </div>
        <div className='login-input-container'>
          <label htmlFor='usuario'>Nome</label>
          <input
            type='text'
            id='usuario'
            name='usuario'
            placeholder='Usuário'
            className='login-input'
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <button type='submit' className='login-button'>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
*/

/*
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-50">
            <h2 className="text-slate-900 text-6xl font-bold mb-8">Login</h2>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                <button
                    type="button"
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => navigate('/home')}
                >
                    Login com useNavigate
                </button>
                <Link 
                    to="/home" 
                    className="bg-purple-100 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-purple-200 transition duration-300"
                >
                    Login com Link
                </Link>
            </div>
        </div>
    );
};

export default Login;
*/


/*
import loginImage from '../../assets/img/Aestetic Winx Club Эстетика Винкс Клуб.jpeg';

function Login() {
    return (
        <div className="bg-pink-50 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
                <h1 className="text-4xl font-bold mb-4 text-pink-700">
                    Login
                </h1>
                <p className="text-base text-pink-900">
                    Por favor, faça seu login
                </p>
                <div className="mb-8 h-48 bg-gray-200 flex justify-center items-center">
                    <img 
                        src={loginImage} 
                        alt="Login" 
                        className="max-w-full max-h-full object-contain" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
*/




