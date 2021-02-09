import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/contrate.css";
import Tecnologia from "../assets/Imagens Site/Tecnologia.png";

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <div class="search-box">
          <form method="get" action="/contrate">
            <div id="search-contrate">
              <FontAwesomeIcon icon={['fas', 'search']} size="lg" color="rgb(237,125,49)"/>
              <input id="search-input-contrate" placeholder="Buscar por um profissional"/>
            </div>
            <button id="search-button-contrate" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div class="search-tabs">
          <label id="contrate-category-label">Categorias</label>
          <label id="contrate-service-label">Serviços</label>
          <label id="contrate-job-label">Profissionais</label>
        </div>
        <div class="category-buttons row">
          <div class="col">
            <a href="/contrate/tecnologia">
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
          </div>
        </div>
      </div>
    )
  }
}
