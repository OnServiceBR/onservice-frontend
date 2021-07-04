import React, { Component } from "react";
import "../styles/contrate.css";
import { FaSearch } from 'react-icons/fa';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Contrate um serviço</h2>
        <div class="search-box">
          {/* <form method="get" action="/contrate">
            <div id="search-contrate">
              <input id="search-input-contrate" placeholder="Buscar por um profissional"/>
              <FaSearch id="search-lupe"/>
            </div>
            <button id="search-button-contrate" type="submit">
              Buscar
            </button>
          </form> */}
        </div>
        <div class="search-tabs">
          <label id="contrate-category-label">Categorias</label>
          <label id="contrate-service-label">Serviços</label>
          <label id="contrate-job-label">Profissionais</label>
        </div>
        <div class="category-buttons row">
          <div class="col">
            <a href="/contrate/tecnologia" id="contrate-zoom-on-hover">
              <button id="tecnology-button" class="category-button">
                Tecnologia
              </button>
            </a>
            <a href="/contrate/beleza">
              <button id="beauty-button" class="category-button">
                Beleza
              </button>
            </a>
            <a href="/contrate/saude">
              <button id="health-button" class="category-button">
                Saúde
              </button>
            </a>
            <a href="/contrate/residencial">
              <button id="residencial-button" class="category-button">
                Residencial
              </button>
            </a>
          </div>
          <div class="col">
            <a href="/contrate/manutencao">
              <button id="maintenance-button" class="category-button">
                Manutenção
              </button>
            </a>
            <a href="/contrate/ensino">
              <button id="teaching-button" class="category-button">
                Ensino
              </button>
            </a>
            <a href="/contrate/eventos">
              <button id="event-button" class="category-button">
                Eventos
              </button>
            </a>
            <a href="/contrate/outros">
              <button id="others-button" class="category-button">
                Outros
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
