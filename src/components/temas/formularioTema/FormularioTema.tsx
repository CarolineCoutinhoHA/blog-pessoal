import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import './FormularioTema.css'; // Verifique se o arquivo está no mesmo diretório

function FormularioTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    if (!token) {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token, navigate]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error('Erro ao buscar tema:', error);
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema(prevTema => ({
      ...prevTema,
      [e.target.name]: e.target.value,
    }));
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const requestConfig = {
      headers: { Authorization: token },
    };

    try {
      if (id) {
        await atualizar(`/temas/${id}`, tema, setTema, requestConfig);
        alert('Tema atualizado com sucesso');
      } else {
        await cadastrar(`/temas`, tema, setTema, requestConfig);
        alert('Tema cadastrado com sucesso');
      }
      retornar();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente');
        handleLogout();
      } else {
        alert('Erro ao processar a solicitação');
      }
    }
  }

  function retornar() {
    navigate("/temas");
  }

  return (
    <div className="formulario-form">
      <div className="title-container">
        <h2 className="formulario-title">
          {id ? 'Editar tema' : 'Cadastre um novo tema'}
        </h2>
      </div>

      <form onSubmit={gerarNovoTema}>
        <div className="input-group">
          <label className="input-label" htmlFor="descricao">Descrição do tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="input-field"
            value={tema.descricao || ''}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="submit-button"
          type="submit"
        >
          {id ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioTema;

