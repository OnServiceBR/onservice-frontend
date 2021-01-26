import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Claudia from '../assets/Claudia-Fundo-Laranja.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return(
		<div>
			<div class="homephrase">
				<label class="h1-home">Nunca foi tão fácil <span style={{color:"rgb(237,125,49)"}}>contratar</span> alguém!</label>
			</div>
			<div class="homephrase">
				<label class="h2-home">Procure um profissional para sua necessidade</label>
			</div>
			<div class="homephrase">
				<form method="get" action="/contrate">
				  <button id="button1-search-home" type="submit">
						<FontAwesomeIcon icon={['fas', 'search']} size="lg" color="rgb(237,125,49)"/>
						&nbsp; &nbsp; Buscar por um profissional
				  </button>
				  <button id="button2-search-home" type="submit">
						Buscar
				  </button>
				</form>
			</div>
      <div>
      <br />
      <br />
      </div>
      <div class="row">
        <div class="col-5">
          <div id="text-claudia">
            <div id="text-h3-home">
              <p><span style={{color:"rgb(237,125,49)"}}>Cadastra-se</span> já e<br />
              receba <span style={{color:"rgb(237,125,49)"}}>novos clientes</span>!</p>
            </div>
            <div id="text-h4-home">
              <p>Impulsione o seu negócio.<br />
              A OnService divulga o seu perfil para<br />
              milhares de clientes. E o melhor, é <span style={{color:"rgb(237,125,49)"}}>grátis</span>!</p>
            </div>
            <form method="get" action="/anuncie">
              <button id="button3-register-home">
                Cadastre-se na OnService Grátis
                <FontAwesomeIcon id="mouse-pointer" icon={['fas', 'mouse-pointer']} size="lg" color="rgb(64,64,64)"/>
              </button>
            </form>
          </div>
        </div>
        <div class="col-7">
          <img id="claudia" src={Claudia} width="500px"/>
        </div>
      </div>
      <br />
      <br />
      <br />
		</div>
    )
  }
}
