import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/trabalhos.css";
import "../styles/profissionais.css";
import ServicoDataService from "../services/servico.service";
import worker1 from "../assets/Profissionais/manga.png";

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      tecnologia: [],
      beleza: [],
      saude: [],
      manutencao: [],
      ensino: [],
      eventos: [],
      trabalho:"",
      profissão:""
    }
  }

  componentDidMount() {
    this.retrieveServicos();
  }

  retrieveServicos() {
    if(this.props.match.params.job==="tecnologia"){
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
        this.setState({
          trabalho:"Tecnologia"
        });
    }
    // vvvvvvvvvvvvvvvvvvvv SÓ ALTEREI AQUIIIIIIIIII TEM QUE MUDAR E AUTOMATIZAR OS OUTROSSSSSSSSSSSSSSSSSSSSSSSS
    else if(this.props.match.params.job==="manutencao"){
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
        this.setState({
          trabalho:"Manutenção"
        });
        this.setState({
          profissão:"Encanador(a)"
        });
    }
    // ^^^^^^^^^^^ SÓ ALTEREI AQUIIIIIIIIII TEM QUE MUDAR E AUTOMATIZAR OS OUTROSSSSSSSSSSSSSSSSSSSSSSSS
    else if(this.props.match.params.job==="saude"){
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
        this.setState({
          trabalho:"Saúde"
        });
    }
    else if(this.props.match.params.job==="ensino"){
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
        this.setState({
          trabalho:"Ensino"
        });
    }
    else if(this.props.match.params.job==="beleza"){
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
        this.setState({
          trabalho:"Beleza"
        });
    }
    else if(this.props.match.params.job==="eventos"){
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
        this.setState({
          trabalho:"Eventos"
        });
    }
  }

  render() {
    const {trabalho} = this.state;
    const {profissão} = this.state;
    return(
      <div>
        {/* O caminho aqui está só para Manutenção, tem que automatizar pra cada uma das categorias de serviços que estão nos botões */}
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate/manutencao">{this.state.trabalho}</a><h2 class="path"> &gt; </h2><h2 class="path">{this.state.profissão}</h2>
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
          <a href="/contrate">
            <label id="profissionais-category-label" class="link-bar-label">Categorias</label>
          </a>
          <a href="javascript:history.back()">
            <label id="profissionais-service-label" class="link-bar-label">Serviços</label>
          </a>
          <label id="profissionais-job-label">Profissionais</label>
        </div>
        <br/>
        <div class="job-link">
          {/* Final do link está manual */}
          <div class="row settingsrow-profissionais">
            <div class="column settingscontainer-profissionais">
              <h2>aa</h2>
            </div>
            <hr class="workers-hr"/>
            <a href="/contrate/manutencao/encanador">
              <div class="row containerrow-profissionais">
                <div class="column imagecontainer-profissionais">
                  <button class="worker-profissionais-button-class"> </button>
                </div>
                <div class="column textcontainer-profissionais">
                  {/* Texto a ser escrito está manual, tanto título quanto quantidade de profissionais */}
                  <p class="workers-names-profissões">Manuel</p>
                  <p class="workers-description-profissões">Um cara muito bacana</p>
                </div>
              </div>
            </a>
            <hr class="workers-hr"/>
          </div>
        </div>
      </div>
    )
  }
}
