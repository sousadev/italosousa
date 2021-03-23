import React from 'react';
import "./styles/styles.css";
import "./styles/globals.css"

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="https://www.github.com/sousadev.png" alt="" />
      </div>

      <div className="content">
        <div className="texts">
          <span className="name" >ITALO SOUSA</span>
          <p className="description">Desenvolvedor Web e Mobile</p>
        </div>
      </div>
      <div className="socials">
        <div className="card-social">
          <div>
            <i></i>
          </div>
          <div>
            <span>Texto</span>
          </div>
        </div>
        <div className="card-social">card2</div>
        <div className="card-social">card3</div>
        <div className="card-social">card4</div>
      </div>
      <div className="footer">
        <span>Desenvolvido por Italo Sousa</span>
      </div>
    </div>
  );
}

export default App;
