import React from 'react';
import ReactPageFlip from 'react-pageflip';

const LivroInterativo = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ReactPageFlip
        width={1200} 
        height={500} 
        size="stretch"
        minWidth={400}
        minHeight={300}
        maxWidth={1200}
        maxHeight={600}
      >
        {/* Página 1 */}
        <div className="pagina" style={{
          backgroundColor: 'lightblue', 
          height: '100%', 
          width: '100%', 
          padding: '20px'
        }}>
          <h1>Página 1</h1>
          <p>Bem-vindo ao livro interativo! Esta é a primeira página.</p>
        </div>

        {/* Página 2 */}
        <div className="pagina" style={{
          backgroundColor: 'lightgreen', 
          height: '100%', 
          width: '100%', 
          padding: '20px'
        }}>
          <h1>Página 2</h1>
          <p>Você virou a página! Aqui está a segunda.</p>
        </div>

        {/* Página 3 */}
        <div className="pagina" style={{
          backgroundColor: 'lightcoral', 
          height: '100%', 
          width: '100%', 
          padding: '20px'
        }}>
          <h1>Página 3</h1>
          <p>Agora você está na terceira página do livro.</p>
        </div>
      </ReactPageFlip>
    </div>
  );
};

export default LivroInterativo;