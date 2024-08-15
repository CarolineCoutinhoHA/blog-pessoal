import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './Navbar.css'; 

const Navbar: React.FC = () => {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  return (
    <div className="navbar w-full bg-indigo-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <div className="logo text-2xl font-bold uppercase">Blog Pessoal</div>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="links flex gap-4 items-center">
          <Link to="/home" className="nav-link hover:underline">Home</Link>
          <Link to="/postagens" className="nav-link hover:underline">Postagens</Link>
          <Link to="/temas" className="nav-link hover:underline">Temas</Link>
          <Link to='/cadastroTema' className='nav-link hover:underline'>Cadastrar tema</Link>
          <Link to="/perfil" className="nav-link hover:underline">Perfil</Link>
          <div className="nav-link cursor-pointer hover:underline" onClick={logout}>
            Sair
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Certifique-se de que o caminho está correto

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Coloque aqui a lógica de logout, como limpar tokens ou sessões
    // Exemplo: localStorage.removeItem('authToken');
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo text-2xl font-bold uppercase">Blog Pessoal</div>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="links flex gap-4 items-center">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/postagens" className="nav-link">Postagens</Link>
          <Link to="/temas" className="nav-link">Temas</Link>
          <Link to="/cadastrar-tema" className="nav-link">Cadastrar Tema</Link>
          <Link to="/perfil" className="nav-link">Perfil</Link>
          <div className="nav-link cursor-pointer" onClick={handleLogout}>
            Sair
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/

/*
function Navbar() {
    return (
      <>
        <div className='w-full bg-pink-200 text-pink-700 flex justify-center py-4'>
          <div className="container flex justify-between items-center text-lg px-4">
            <div className='text-2xl font-bold uppercase ml-8'>
              Blog Pessoal
            </div>
  
            <div className='flex gap-4'>
              <div className='hover:underline font-bold'>Postagens</div>
              <div className='hover:underline font-bold'>Temas</div>
              <div className='hover:underline font-bold'>Cadastrar tema</div>
              <div className='hover:underline font-bold'>Perfil</div>
              <div className='hover:underline font-bold'>Sair</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Navbar;
  */
 /*
 import { Link } from 'react-router-dom';

 function Navbar() {
     return (
         <>
             <div className='w-full bg-pink-200 text-pink-700 flex justify-center py-4'>
                 <div className="container flex justify-between items-center text-lg px-4">
                     <div className='text-2xl font-bold uppercase mx-4'>
                         Blog Pessoal
                     </div>
 
                     <div className='flex gap-4'>
                         <Link to='/login' className='hover:underline font-bold'>Login</Link>
                         <Link to='/home' className='hover:underline font-bold'>Home</Link>
                         <div className='hover:underline font-bold'>Postagens</div>
                         <div className='hover:underline font-bold'>Temas</div>
                         <div className='hover:underline font-bold'>Cadastrar tema</div>
                         <div className='hover:underline font-bold'>Perfil</div>
                         <div className='hover:underline font-bold'>Sair</div>
                     </div>
                 </div>
             </div>
         </>
     );
 }
 
 export default Navbar;
 */