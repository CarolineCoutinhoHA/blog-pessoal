import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-fuchsia-400 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-fuchsia-50 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-sky-500 hover:bg-sky-400 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-rose-500 hover:bg-rose-900 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas

/*import { Link } from 'react-router-dom'


function CardTemas() {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Descricao tema:</p>
      <div className="flex">
        <Link to='' className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas
*/