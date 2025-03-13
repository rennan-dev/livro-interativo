import React from 'react';
import './App.css';
import LivroInterativo from './components/LivroInterativo';

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Meu Livro Interativo</h1>
      <LivroInterativo />
    </div>
  );
}

export default App;