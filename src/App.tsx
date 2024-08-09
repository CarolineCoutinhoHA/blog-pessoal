/*import './App.css';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline text-center">
        Hello world!
      </h1>
    </>
  );
}

export default App;
*/

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


import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
    <Home/>
    </>
);
}
export default App;


/*import './App.css';
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
*/