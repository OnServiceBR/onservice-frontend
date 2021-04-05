import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/trabalhos.css";
import ServicoDataService from "../services/servico.service";
import privada from "../assets/Image2.png";

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
      trabalho:""
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
    }
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
    return(
      <div>
        <a class="path" href="/">Home</a><h2 class="path"> > </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> > </h2><h2 class="path">{this.state.trabalho}</h2>
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
        <div class="dictionary">
          |
          <a href="#names-A"> A </a>|
          <a href="#names-B"> B </a>|
          <a href="#names-C"> C </a>|
          <a href="#names-D"> D </a>|
          <a href="#names-E"> E </a>|
          <a href="#names-F"> F </a>|
          <a href="#names-G"> G </a>|
          <a href="#names-H"> H </a>|
          <a href="#names-I"> I </a>|
          <a href="#names-J"> J </a>|
          <a href="#names-K"> K </a>|
          <a href="#names-L"> L </a>|
          <a href="#names-M"> M </a>|
          <a href="#names-N"> N </a>|
          <a href="#names-O"> O </a>|
          <a href="#names-P"> P </a>|
          <a href="#names-Q"> Q </a>|
          <a href="#names-R"> R </a>|
          <a href="#names-S"> S </a>|
          <a href="#names-T"> T </a>|
          <a href="#names-U"> U </a>|
          <a href="#names-V"> V </a>|
          <a href="#names-W"> W </a>|
          <a href="#names-X"> X </a>|
          <a href="#names-Y"> Y </a>|
          <a href="#names-Z"> Z </a>|
        </div>
        <br/>
        <hr class="job-hr"/>
         <h1 class="dictionary-letter">A<a name="names-A"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">B<a name="names-B"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">C<a name="names-C"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">D<a name="names-D"></a></h1>
        <hr class="job-hr"/>
          <div class="row">
            <div class="column imagecontainer">
              <img class="job-icon" src={privada}/>
            </div>
            <div class="column textcontainer">
              <a class="job-name" href="/contrate/manutencao/desentupidor">
                <p class="job-name">Desentupidor(a)</p>
              </a>
              <p class="workers-count">12 profissionais</p>
            </div>
          </div>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">E<a name="names-E"></a></h1>
        <hr class="job-hr"/>
          <div class="row">
            <div class="column imagecontainer">
              <img class="job-icon" src={privada}/>
            </div>
            <div class="column textcontainer">
            <a class="job-name" href="/contrate/manutencao/eletricista">
              <p class="job-name">Eletricista</p>
            </a>
              <p class="workers-count">11 profissionais</p>
            </div>
          </div>
        <hr class="job-hr"/>
          <div class="row">
            <div class="column imagecontainer">
              <img class="job-icon" src={privada}/>
            </div>
            <div class="column textcontainer">
              <a class="job-name" href="/contrate/manutencao/eletricista">
                <p class="job-name">Encanador(a)</p>
              </a>
              <p class="workers-count">14 profissionais</p>
            </div>
          </div>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">F<a name="names-F"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">G<a name="names-G"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">H<a name="names-H"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">I<a name="names-I"></a></h1>
        <hr class="job-hr"/>
          <div class="row">
            <div class="column imagecontainer">
              <img class="job-icon" src={privada}/>
            </div>
            <div class="column textcontainer">
              <a class="job-name" href="/contrate/manutencao/instaladordeeletrodomesticos">
                <p class="job-name">Instalador(a) de eletrodomésticos</p>
              </a>
              <p class="workers-count">8 profissionais</p>
            </div>
          </div>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">J<a name="names-J"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">K<a name="names-K"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">L<a name="names-L"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">M<a name="names-M"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">N<a name="names-N"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">O<a name="names-O"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">P<a name="names-P"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">Q<a name="names-Q"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">R<a name="names-R"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">S<a name="names-S"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">T<a name="names-T"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">U<a name="names-U"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">V<a name="names-V"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">W<a name="names-W"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">X<a name="names-X"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">Y<a name="names-Y"></a></h1>
        <hr class="job-hr"/>
          <h1 class="dictionary-letter">Z<a name="names-Z"></a></h1>
        <hr class="job-hr"/>        
      </div>
    )
  }
}
