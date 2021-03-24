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
          
          <img src="/assets/linkedin.png" alt="" />
          
          
            <span>Linkedin</span>
          
        </a>

        <a className="card-social" href="https://www.instagram.com/italo.dev">
          
          <img src="/assets/instagram.png" alt="" />
          
         
            <span>Instagram</span>
          
        </a>
        <a className="card-social" href="https://www.github.com/sousadev">
          
          <img src="/assets/github.png" alt="" />
     
            <span>GitHub</span>
          
        </a>
        <a className="card-social" href="https://api.whatsapp.com/send/?phone=5511930824454&text&app_absent=0">
        
          <img src="/assets/whatsapp.png" alt="" />

            <span>WhatsApp</span>
  
        </a>
        <a className="card-social" href="https://www.italosousa.com.br">
    
          <img src="/assets/web.png" alt="" />
 
            <span>Site</span>
    
        </a>
        
        <a className="card-social" href="tel:+5511930824454">
          
          <img src="/assets/call.png" alt="" />
     
            <span>Telefone</span>
          
        </a>
        
      </div>
      <div className="footer">
        <p>Desenvolvido por Italo Sousa</p>
      </div>
    </div>
  );
}

export default App;
