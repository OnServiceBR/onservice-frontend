import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/trabalhos.css";
import "../styles/profissionais.css";
import ServicoDataService from "../services/servico.service";
import Profissional1 from "../assets/Profissionais/prof1.png";
import { Multiselect } from 'multiselect-react-dropdown';

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
      profissão:"",
      w2w:"",

      DropdownOrder: [
        /* W2W */
        {name: 'Destaque', id: "destaque"},
        {name: 'Avaliação', id: "avaliação"},
      ],
    };
    this.style = {
      chips: {
        background: "rgb(237, 125, 49)"
      },
      searchBox: {
        "border": "0.5pt none rgb(118,113,113)",
        "border-radius": "0.15cm",
        padding: 0,
      },
      inputField: {
        margin: 0,
        "padding-left":"19px",
        width: "100%",
      },
      multiselectContainer: {
        color: "rgb(175,171,171)",
        width: "95%",
        "margin-right": "auto",
        "margin-left": "auto"
      },
      groupHeading: {
        color: "rgb(237, 125, 49)",
      },
      option: { // To change css for dropdown options
        color: "rgb(118,113,113)",
      },
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
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate/manutencao">{this.state.trabalho}</a><h2 class="path"> &gt; </h2><h2 class="path-actual">{this.state.profissão}</h2>
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
        <div class="row workers-row-order">
          <div class="column workers-column-order-title">
            <div class="order-workers">
              <label for="w2w">Ordenar por: </label>
            </div>
          </div>
          <div class="column workers-column-order-dropdown">
            <div class="order-workers-dropdown">
              <Multiselect
                options={this.state.DropdownOrder} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="MultipleDropdownWorkers"
                style={this.style}
                selectionLimit={1}
                placeholder="Selecione"
              />
            </div>
          </div>
        </div>
        <div class="row workers-row-all">
          <div class="column workers-column-settings">
            <div class="workers-settings-title">
              Cidade
            </div>
            <div class="workers-settings-text">
              <label class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{marginLeft:"14%", marginBottom:"0%"}}>
                São Carlos
              </label>
            </div>
            <div class="workers-settings-title">
              Sexo
            </div>
            <div class="workers-settings-text">
              <label class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{marginLeft:"14%", marginBottom:"0%"}}>
                Feminino
              </label>
            </div>
            <div class="workers-settings-text">
              <label class="container">
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{marginLeft:"14%", marginBottom:"0%"}}>
                Masculino
              </label>
            </div>
          </div>
          <div id="workers-change-color-on-hover" class="column workers-column-profile">
            {/* -------------------------------------------------------------------- */}
            <a href="/prof1" class="row workers-row-profile">
              <div class="column workers-image">
                <img src={Profissional1} class="workers-picture-profissões"/>
              </div>
              <div class="column workers-profile">
                <div id="workers-name-change" class="workers-name">
                  Pablo Picasso
                </div>
                <div class="workers-description">
                  <p>
                    Por conseguinte, o surgimento do comércio virtual aponta para a melhoria das condições financeiras e administrativas exigidas. O incentivo ao avanço tecnológico, assim como a complexidade dos estudos efetuados deve passar por modificações independentemente do sistema de formação de quadros que corresponde às necessidades. A prática cotidiana prova que a revolução dos costumes exige a precisão e aaaaaaaaaaaaaaaaaaaaaa
                  </p>
                </div>
              </div>
              <hr class="workers-hr"/>
            </a>
            {/* -------------------------------------------------------------------- */}
            <a href="/prof2" class="row workers-row-profile">
              <div class="column workers-image">
                <img src={Profissional1} class="workers-picture-profissões"/>
              </div>
              <div class="column workers-profile">
                <div id="workers-name-change" class="workers-name">
                  Vincent van Gogh
                </div>
                <div class="workers-description">
                  <p>
                    Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a valorização de fatores subjetivos agrega valor ao estabelecimento das regras de conduta normativas. Não obstante, o julgamento imparcial das eventualidades pode nos levar a considerar a reestruturação de alternativas às soluções ortodoxas. Do mesmo modo, a constante divulgação das informações representa uma abertura para a melhoria do remanejamento dos quadros
                  </p>
                </div>
              </div>
              <hr class="workers-hr"/>
            </a>
            {/* -------------------------------------------------------------------- */}
            <a href="/prof3" class="row workers-row-profile">
              <div class="column workers-image">
                <img src={Profissional1} class="workers-picture-profissões"/>
              </div>
              <div class="column workers-profile">
                <div id="workers-name-change" class="workers-name">
                  Michelangelo
                </div>
                <div class="workers-description">
                  <p>
                    Percebemos, cada vez mais, que a execução dos pontos do programa nos obriga à análise dos procedimentos normalmente adotados
                  </p>
                </div>
              </div>
              <hr class="workers-hr"/>
            </a>
            {/* -------------------------------------------------------------------- */}
            <a href="/prof4" class="row workers-row-profile">
              <div class="column workers-image">
                <img src={Profissional1} class="workers-picture-profissões"/>
              </div>
              <div class="column workers-profile">
                <div id="workers-name-change" class="workers-name">
                  Salvador Dalí
                </div>
                <div class="workers-description">
                  <p>
                    Todavia, a crescente influência da mídia possibilita uma melhor visão global das direções preferenciais no sentido do progresso. Por outro lado, o aumento do diálogo entre os diferentes setores produtivos assume importantes posições no estabelecimento do fluxo de informações. O cuidado em identificar pontos críticos no comprometimento entre as equipes auxilia a preparação e a composição das diretrizes de desenvolvimento para o futuro
                  </p>
                </div>
              </div>
              <hr class="workers-hr"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
