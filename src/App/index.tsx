import React from 'react';
import "./styles/styles.css";
import "./styles/globals.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="https://www.github.com/sousadev.png" alt="" />
        <div className="texts">
          <span className="name" >ITALO SOUSA</span>
          <p className="description">Desenvolvedor Web e Mobile</p>
        </div>
      </div>

      <div className="content">

      </div>
      <div className="socials">
        <a className="card-social" href="https://www.linkedin.com/in/sousadev">
          <div >
          <img src="/assets/linkedin.png" alt="" />
          </div>
          <div>
            <span>Linkedin</span>
          </div>
        </a>

        <a className="card-social" href="https://www.instagram.com/italo.dev">
          <div >
          <img src="/assets/instagram.png" alt="" />
          </div>
          <div>
            <span>Instagram</span>
          </div>
        </a>
        <a className="card-social" href="https://www.github.com/sousadev">
          <div >
          <img src="/assets/github.png" alt="" />
          </div>
          <div>
            <span>GitHub</span>
          </div>
        </a>
        <a className="card-social" href="https://api.whatsapp.com/send/?phone=5511930824454&text&app_absent=0">
          <div >
          <img src="/assets/whatsapp.png" alt="" />
          </div>
          <div>
            <span>WhatsApp</span>
          </div>
        </a>
        <a className="card-social" href="https://www.italosousa.com.br">
          <div >
          <img src="/assets/web.png" alt="" />
          </div>
          <div>
            <span>Site</span>
          </div>
        </a>
        
        <a className="card-social" href="tel:+5511930824454">
          <div >
          <img src="/assets/call.png" alt="" />
          </div>
          <div>
            <span>Telefone</span>
          </div>
        </a>
        
      </div>
      <div className="footer">
        <p>Desenvolvido por Italo Sousa</p>
      </div>
    </div>
  );
}

export default App;
