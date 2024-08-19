import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar, deletar } from '../../../services/Service';
import './DeletarTema.css';

function DeletarTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token }
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate('/temas');
  }

  async function deletarTema() {
    try {
      await deletar(`/temas/${id}`, {
        headers: { Authorization: token }
      });
      alert('Tema apagado com sucesso');
    } catch (error) {
      alert('Erro ao apagar o Tema');
    }
    retornar();
  }

  return (
    <div className="deletar-container">
      <header className="deletar-header">Apagar tema</header>
      <div className="deletar-content">
        <p>Você tem certeza de que deseja excluir o tema a seguir?</p>
        <div className="tema-info">
          <p className="tema-label">Tema:</p>
          <p className="tema-descricao">{tema.descricao}</p>
        </div>
      </div>
      <div className="deletar-buttons">
        <button className="deletar-button deletar-button-nao" onClick={retornar}>Não</button>
        <button className="deletar-button deletar-button-sim" onClick={deletarTema}>Sim</button>
      </div>
    </div>
  );
}

export default DeletarTema;
