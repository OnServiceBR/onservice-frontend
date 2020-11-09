import React, { Component } from "react";
import "../styles/home.css";
import logo from '../assets/Logo - Laranja.png';
import bonecoHome from '../assets/boneco_home.png';
import bonecoOlhando from '../assets/undraw_guy_looking.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return(
      <>
        <div class="container-fluid">
          <div class="top-side">
            <img src={logo} />
          </div>
          <div class="top-side">
            <label id="slogan">SERVINDO BEM, SERVINDO SEMPRE!</label>
          </div>

          <div class="row">
            <div class="col-md-6">
              <img src={bonecoHome} />
            </div>
            <div class="col-md-6 texto-home">
              <div id="label-home">
                <label>Encontre o melhor profissional para sua necessidade!</label>
              </div>
              <div id="btn-home">
                <button id="procurar-lupa">Procure profissionais agora!</button>
                <FontAwesomeIcon id="lupa" icon={['fa', 'search']} size="2x"/>
              </div>
            </div>
          </div>

          <div class="destaques">
            <label>Destaques</label>
          </div>

          <div class="sobre">
            <label>Quem somos nós?</label>
            <div class="row">
              <div class="col-md-6 sobre-itens">
                <img src={bonecoOlhando} alt=""/>
              </div>
              <div class="col-md-6 sobre-itens">
                <div class="caixa">
                  <label>A OnService é uma plataforma digital com o propósito de facilitar a contratação de profissionais autônomos</label>
                </div>
                <div class="caixa">
                  <label>Divulgue seu serviço</label>
                </div>
                <div class="caixa">
                  <label>Seja contratado por pessoas da sua região</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
