import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';

function Cadastro() {

  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [mensagemErro, setMensagemErro] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate('/login');
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        alert('Usuário cadastrado com sucesso');
      } catch (error) {
        setMensagemErro('Erro ao cadastrar o Usuário');
      }
    } else {
      setMensagemErro('Dados inconsistentes. Verifique as informações de cadastro.');
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha("");                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <div className="fundoCadastro hidden lg:block"></div>
      <div className="cadastro-container flex flex-col justify-center items-center gap-3">
        <div className="cadastro-header">
          Cadastrar
        </div>
        {mensagemErro && <div className="mensagem-erro">{mensagemErro}</div>}
        <form className='flex flex-col w-full gap-4' onSubmit={cadastrarNovoUsuario}>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="input-field"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="input-field"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="input-field"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="input-field"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="input-field"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-between w-full gap-4">
            <button className='button-cancelar' type='button' onClick={back}>
              Cancelar
            </button>
            <button className='button-cadastrar' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;

