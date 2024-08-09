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
 