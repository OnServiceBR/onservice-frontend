import React, { Component } from "react";
import "../styles/home.css";
import Claudia from '../assets/Claudia-Fundo-Laranja.png';
// import WhiteLeft from '../assets/BrancoEsquerda.png';
// import WhiteRight from '../assets/BrancoDireita.png';
import Pessoa from '../assets/PessoaX.png'

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
      {/* <img src={WhiteLeft} id="white-left"/>
      <img src={WhiteRight} id="white-right"/> */}
      <div class="row row-all-cards" id= "center-cards">
        <div class="column column-each-card">
          <div class="row row-card-work">
            <p>Organizador de festas infantis</p>
          </div>
          <hr class="each-card-hr"/>
          <div class="row row-card-picture">
            <img src={Pessoa}/>
          </div>
          <div class="row row-card-name">
            <p>Paulonilson</p>
          </div>
        </div>
        {/* <div class="column column-each-card">
          <div class="row row-card-work">
            Organizador 2
          </div>
          <hr class="each-card-hr"/>
          <div class="row row-card-picture">
            Foto 2
          </div>
          <div class="row row-card-name">
            Ronaldo 2
          </div>
        </div>
        <div class="column column-each-card">
          <div class="row row-card-work">
            Organizador 3
          </div>
          <hr class="each-card-hr"/>
          <div class="row row-card-picture">
            Foto 3
          </div>
          <div class="row row-card-name">
            Ronaldo 3
          </div>
        </div>
        <div class="column column-each-card">
          <div class="row row-card-work">
            Organizador 4
          </div>
          <hr class="each-card-hr"/>
          <div class="row row-card-picture">
            Foto 4
          </div>
          <div class="row row-card-name">
            Ronaldo 4
          </div>
        </div>
        <div class="column column-each-card">
          <div class="row row-card-work">
            Organizador 5
          </div>
          <hr class="each-card-hr"/>
          <div class="row row-card-picture">
            Foto 5
          </div>
          <div class="row row-card-name">
            Ronaldo 5
          </div>
        </div> */}
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
          <img id="claudia" src={Claudia} width="500px" alt="Home"/>
        </div>
      </div>
      <br />
      <br />
      <br />
		</div>
    )
  }
}
