import React, { Component } from "react";
import "../styles/trabalhos.css";
import "../styles/profissionais.css";
import { Multiselect } from 'multiselect-react-dropdown';
import Database from "../components/Database.js";
import { FaSearch } from 'react-icons/fa';

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
        { name: 'A-Z', id: "a-z" },
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
    if (selectedItem.id === "a-z") {
      let mapped = Database.filter((item) => {
        for (var i = 0; i < item.jobs.length; i++) {
          if (item.jobs[i] === this.state.profissao) return item;
        }
      }).map((item) => {
        return item
      });
      mapped.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      })
      console.log(mapped)
      this.setState({ profissionais: mapped })
    }
    else if (selectedItem.id === "destaque") {
      let mapped = Database.filter((item) => {
        for (var i = 0; i < item.jobs.length; i++) {
          if (item.jobs[i] === this.state.profissao) return item;
        }
      }).map((item) => {
        return item
      });
      this.setState({ profissionais: mapped })
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
        for (var i = 0; i < item.jobs.length; i++) {
          if (item.jobs[i] === this.state.profissao) {
            if (this.state.feminino && item.gender === "feminino" || item.gender === "prefiro não dizer") return item;
            if (this.state.masculino && item.gender === "masculino" || item.gender === "prefiro não dizer") return item;
          }
        }
      }).map((item) => {
        return item
      });
      this.setState({ profissionais: mapped })
    }
  }

  componentDidMount() {
    console.log(this.props.match.params)
    let mapped = Database.filter((item) => {
      for (var i = 0; i < item.jobs.length; i++) {
        if (item.jobs[i] === this.state.profissao) return item;
      }
    }).map((item) => {
      return item
    });
    this.setState({ profissionais: mapped })
  }

  render() {
    const { categoria, profissao, profissionais } = this.state;
    return (
      <div>
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><a class="path" href={`/contrate/${categoria}`}>{categoria}</a><h2 class="path"> &gt; </h2><h2 class="path-actual">{profissao}</h2>
        <div class="search-box">
          <form method="get" action="/contrate">
            <div id="search-contrate">
              <input id="search-input-contrate" placeholder="Buscar por um profissional" />
              <FaSearch id="search-lupe" />
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
                <input id="feminino" type="checkbox" value={true} onChange={this.handleChange.bind(this)} />
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
            {profissionais.map(item =>
              <a href={`/contrate/${categoria}/${profissao}/${item.id}`} class="row workers-row-profile">
                <div class="column workers-image">
                  <img alt="" src={item.picture} class="workers-picture-profissões" />
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
          </div>
        </div>
      </div>
    )
  }
}
