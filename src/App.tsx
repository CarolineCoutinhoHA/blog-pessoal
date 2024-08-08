
import Home from './paginas/home/Home';
import './App.css';

function App() {
  return (
    <Home
      title="Componente Home"
      description="Este é um componente Home que recebe props."
    />
  );
}

export default App;

/*import './App.css';
import { useState } from 'react';

function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <div>
      <h1>App</h1>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App;
*/



