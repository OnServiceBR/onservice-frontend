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
      categoriaCode: this.props.match.params.job, // Não alterar, serve para o atalho "Serviços" e html
      categoria: this.props.match.params.job,
      profissaoCode: this.props.match.params.workers, // Não alterar, serve para o html
      profissao: this.props.match.params.workers,
      w2w: "",
      profissionais: [],
      sortType: 'Destaque',
      options: ['masculino', 'feminino'],
    
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

  sortAZ() {
    let mapped = Database.filter((item) => {
      for (var i = 0; i < item.jobs.length; i++) {
        if (item.jobs[i] === this.state.profissaoCode){
          if(this.state.options.includes(item.gender))
            return item
        }
      }
    }).map ((item)=>{
      return item
    });
    mapped.sort (function (a, b) {
      return a.name.localeCompare(b.name);
    })
    this.setState({ profissionais: mapped})
  }

  sortDestaque() {
    let mapped = Database.filter((item) => {
      for (var i = 0; i < item.jobs.length; i++) {
        if (item.jobs[i] === this.state.profissaoCode) return item;
      }
    }).map ((item)=>{
      return item
    });
    this.setState({ profissionais: mapped})
  }

  onSelect(selectedList, selectedItem) {
    if (selectedItem.id === "a-z"){
      this.setState({sortType: 'a-z'})
      this.sortAZ()
    }
    else if (selectedItem.id === "destaque"){
      this.sortDestaque()
    }
  }

  handleChange(event) {
    const field = event.target.id;
    console.log(event)
    console.log(this.state.options)
    if (field === "feminino") {
      if (event.target.checked){
        this.setState({options: [...this.state.options, "feminino"]}, () => {
          this.sortAZ()
          console.log(this.state.options)
        })
      }else{
        let index = this.state.options.indexOf("feminino");
        this.setState({options: [...this.state.options]}, () => {
          this.state.options.splice(index, 1)
          this.sortAZ()
        })
      }
    }else if(field === "masculino"){
      if (event.target.checked){
        this.setState({options: [...this.state.options, "masculino"]}, () => {
          this.sortAZ()
        })
      }else{
        let index = this.state.options.indexOf("masculino");
        this.setState({options: [...this.state.options]}, () => {
          this.state.options.splice(index, 1)
          this.sortAZ()
        })
      }
    }
  }

  componentDidMount() {
    console.log(this.props.match.params)
    let mapped = Database.filter((item) => {
      for (var i = 0; i < item.jobs.length; i++) {
        if (item.jobs[i] === this.state.profissaoCode) return item;
      }
    }).map((item) => {
      return item
    });
    this.setState({profissionais: mapped})
  }

  render() {
    var { categoria, profissao, profissionais, categoriaCode, profissaoCode } = this.state;
    
    // Correção gramatical das categorias
    if (categoria === "manutencao") {
      categoria = "manutenção"
    }
    else if (categoria === "saude") {
      categoria = "saúde"
    }
    
    // Correção gramatical das profissões
    if (profissao === "artesa(o)") {
      profissao = "Artesã(o)"
    }
    else if (profissao === "assistente-tecnico(a)") {
      profissao = "Assistente Técnico(a)"
    }
    else if (profissao === "designer-grafico") {
      profissao = "Designer Gráfico"
    }
    else if (profissao === "editor(a)-de-videos") {
      profissao = "Editor(a) de Vídeos"
    }
    else if (profissao === "especialista-em-midias") {
      profissao = "Especialista em Mídias"
    }
    else if (profissao === "fotografo(a)") {
      profissao = "Fotógrafo(a)"
    }
    else if (profissao === "fretes-e-mudancas") {
      profissao = "Fretes e Mudanças"
    }
    else if (profissao === "garcom(garconete)") {
      profissao = "Garçom(Garçonete)"
    }
    else if (profissao === "manutencao-de-pabx") {
      profissao = "Manutenção de PABX"
    }
    else if (profissao === "montador(a)-de-moveis") {
      profissao = "Montador(a) de Móveis"
    }
    else if (profissao === "passeador(a)-de-caes") {
      profissao = "Passeador(a) de cães"
    }
    else if (profissao === "professor(a)-de-educacao-fisica") {
      profissao = "Professor(a) de Educação Física"
    }
    else if (profissao === "professor(a)-de-ingles") {
      profissao = "Professor(a) de Inglês"
    }
    else if (profissao === "professor(a)-de-programacao") {
      profissao = "Professor(a) de Programação"
    }
    else if (profissao === "psicologo(a)") {
      profissao = "Psicólogo(a)"
    }
    else if (profissao === "publicitario(a)") {
      profissao = "Publicitário(a)"
    }

    return (
      <div>
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><a class="path" href={`/contrate/${categoriaCode}`}>{categoria}</a><h2 class="path"> &gt; </h2><h2 class="path-actual">{profissao}</h2>
        <div class="search-box">
          {/* <form method="get" action="/contrate">
            <div id="search-contrate">
              <input id="search-input-contrate" placeholder="Buscar por um profissional" />
              <FaSearch id="search-lupe" />
            </div>
            <button id="search-button-contrate" type="submit">
              Buscar
            </button>
          </form> */}
        </div>
        <div class="search-tabs">
          <a href="/contrate">
            <label id="profissionais-category-label" class="link-bar-label">Categorias</label>
          </a>
          <a href={`/contrate/${categoriaCode}`}>
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
                <input id="feminino" type="checkbox" defaultChecked onChange={this.handleChange.bind(this)}/>
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
                Feminino
              </label>
            </div>
            <div class="workers-settings-text">
              <label class="container">
                <input id="masculino" type="checkbox" defaultChecked onChange={this.handleChange.bind(this)}/>
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
                Masculino
              </label>
            </div>
          </div>
          <div id="workers-change-color-on-hover" class="column workers-column-profile">
            {profissionais.map(item =>
              <a href={`/contrate/${categoriaCode}/${profissaoCode}/${item.id}`} class="row workers-row-profile">
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
