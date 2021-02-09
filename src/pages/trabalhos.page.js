import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/trabalhos.css";
import Tecnologia from "../assets/Imagens Site/Tecnologia.png";
import ServicoDataService from "../services/servico.service";

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      tecnologia: [],
      beleza: [],
      saude: [],
      manutencao: [],
      ensino: [],
      eventos: []
    }
  }

  componentDidMount() {
    this.retrieveServicos();
  }

  retrieveServicos() {
    if(this.props.match.params.job=="tecnologia"){
      ServicoDataService.getTecnologia()
        .then(res => {
          this.setState({
            tecnologia: res.data
          });
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    else if(this.props.match.params.job=="manutencao"){
      ServicoDataService.getManutencao()
        .then(res => {
          this.setState({
            manutencao: res.data
          });
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    else if(this.props.match.params.job=="saude"){
      ServicoDataService.getSaude()
        .then(res => {
          this.setState({
            saude: res.data
          });
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    else if(this.props.match.params.job=="ensino"){
      ServicoDataService.getEnsino()
        .then(res => {
          this.setState({
            ensino: res.data
          });
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    else if(this.props.match.params.job=="beleza"){
      ServicoDataService.getBeleza()
        .then(res => {
          this.setState({
            beleza: res.data
          });
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    else if(this.props.match.params.job=="eventos"){
      ServicoDataService.getEventos()
        .then(res => {
          this.setState({
            eventos: res.data
          });
          // console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
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
          <label id="trabalhos-category-label">Categorias</label>
          <label id="trabalhos-service-label">Serviços</label>
          <label id="trabalhos-job-label">Profissionais</label>
        </div>
        <h2>{this.props.match.params.job}</h2>
      </div>
    )
  }
}
