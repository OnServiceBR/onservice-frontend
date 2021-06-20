import React, { Component } from "react";
import "../styles/trabalhos.css";
import "../styles/profissionais.css";
import { Multiselect } from 'multiselect-react-dropdown';
import Database from "../components/Database.js";
import { useParams } from "react-router";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tecnologia: [],
      beleza: [],
      saude: [],
      manutencao: [],
      ensino: [],
      eventos: [],
      categoria: this.props.match.params.job,
      profissao: this.props.match.params.workers,
      w2w: "",
      profissionais: [],
      feminino: true,
      masculino: true,
    
      DropdownOrder: [
        { name: 'Destaque', id: "destaque" },
        { name: 'Avaliação', id: "avaliação" },
        { name: 'A-Z', id: "a-z"},
      ],

    };
    this.style = {
      chips: {
        background: "rgb(237, 125, 49)",
        color: "rgb(255,255,255)"
      },
      searchBox: {
        "border": "0.5pt none rgb(118,113,113)",
        "border-radius": "0.15cm",
        padding: 0,
      },
      inputField: {
        margin: 0,
        "padding-left": "19px",
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
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(selectedList, selectedItem) {
    if (selectedItem.id === "a-z"){
      let mapped = Database.filter((item) => {
        for (var i = 0; i < item.job.length; i++) {
          if (item.job[i] === this.state.profissao) return item;
        }
      }).map ((item)=>{
        return item
      });
      mapped.sort (function (a, b) {
        return a.name.localeCompare(b.name);
      })
      console.log(mapped)
      this.setState({ profissionais: mapped})
    }
    else if (selectedItem.id === "destaque"){
      let mapped = Database.filter((item) => {
        for (var i = 0; i < item.job.length; i++) {
          if (item.job[i] === this.state.profissao) return item;
        }
      }).map ((item)=>{
        return item
      });
      this.setState({ profissionais: mapped})
    }
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "feminino") {
      this.setState({ feminino: event.target.value })
      console.log(this.state.feminino)
    }
    if (this.state.feminino === true) {
      let mapped = Database.filter((item) => {
        for (var i = 0; i < item.job.length; i++) {
            if (item.job[i] === this.state.profissao){
                if (this.state.feminino && item.gender==="feminino") return item;
                if (this.state.masculino && item.gender==="masculino") return item;
            }
        }
    }).map ((item)=>{
        return item
    });
    this.setState({ profissionais: mapped})
    }
  }

  componentDidMount() {
    console.log(this.props.match.params)
    let mapped = Database.filter((item) => {
      for (var i = 0; i < item.job.length; i++) {
        if (item.job[i] === this.state.profissao) return item;
      }
    }).map ((item)=>{
      return item
    });
    this.setState({ profissionais: mapped})
  }

  render() {
    const { categoria, profissao, profissionais } = this.state;
    return (
      <div>
        {/* O caminho aqui está só para Manutenção, tem que automatizar pra cada uma das categorias de serviços que estão nos botões */}
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate/manutencao">{categoria}</a><h2 class="path"> &gt; </h2><h2 class="path-actual">{profissao}</h2>
        <div class="search-box">
          <form method="get" action="/contrate">
            <div id="search-contrate">
              {/* Icone de busca */}
              <input id="search-input-contrate" placeholder="Buscar por um profissional" />
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
        <br />
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
                // ------------------------------------------------------------------------------------------------
                // VER AQUI COMO DESABILITAR A CAIXINHA DO DROPDOWN QUANDO SELECIONA PELO THIS.ONSELECT
                // ------------------------------------------------------------------------------------------------
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="MultipleDropdownWorkers"
                style={this.style}
                singleSelect={true}
                avoidHighlightFirstOption={true}
                placeholder="Selecione"
                hidePlaceholder={true}
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
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
                São Carlos
              </label>
            </div>
            <div class="workers-settings-title">
              Sexo
            </div>
            <div class="workers-settings-text">
              <label class="container">
                <input id="feminino" type="checkbox" value={true} onChange={this.handleChange.bind(this)}/>
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
                Feminino
              </label>
            </div>
            <div class="workers-settings-text">
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
                Masculino
              </label>
            </div>
          </div>
          <div id="workers-change-color-on-hover" class="column workers-column-profile">
            {/* -------------------------------------------------------------------- */}
            
            {profissionais.map(item =>
              <a href={item.link} class="row workers-row-profile">
                <div class="column workers-image">
                  <img src={item.picture} class="workers-picture-profissões" />
                </div>
                <div class="column workers-profile">
                  <div id="workers-name-change" class="workers-name">
                    {item.name}
                  </div>
                  <div class="workers-description">
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
                <hr class="workers-hr" />
              </a>
            )}
            {/* {Database.filter((item) => {
              for (var i = 0; i < item.job.length; i++) {
                if (item.job[i] === profissao) return item;
              }
            }).map(item =>
              <a href={item.link} class="row workers-row-profile">
                <div class="column workers-image">
                  <img src={item.picture} class="workers-picture-profissões" />
                </div>
                <div class="column workers-profile">
                  <div id="workers-name-change" class="workers-name">
                    {item.name}
                  </div>
                  <div class="workers-description">
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
                <hr class="workers-hr" />
              </a>
            )} */}

            {/* -------------------------------------------------------------------- */}
            {/* <a href="/perfil" class="row workers-row-profile">
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
            </a> */}
            {/* -------------------------------------------------------------------- */}
            {/* <a href="/perfil" class="row workers-row-profile">
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
            </a> */}
            {/* -------------------------------------------------------------------- */}
            {/* <a href="/perfil" class="row workers-row-profile">
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
            </a> */}
          </div>
        </div>
      </div>
    )
  }
}
