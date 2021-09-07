import React, { Component, useState, useEffect } from "react";
import "../styles/trabalhos.css";
import "../styles/profissionais.css";
import { Multiselect } from 'multiselect-react-dropdown';
import Database from "../components/Database.js";
import { FaSearch } from 'react-icons/fa';

export default function Home(props) { 
  const [tecnologia, setTecnologia] = useState([])
  const [beleza, setBeleza] = useState([])
  const [saude, setSaude] = useState([])
  const [manutencao, setManutencao] = useState([])
  const [ensino, setEnsino] = useState([])
  const [eventos, setEventos] = useState([])
  const [w2w, setW2W] = useState("")
  const [sortType, setSortType] = useState("Destaque")
  const [profissionais, setProfissionais] = useState([])
  const [options, setOptions] = useState([])
  const [tempProfissionais, setTempProfissionais] = useState([])
  const categoriaCode = props.match.params.job // Não alterar, serve para o atalho "Serviços" e html
  var categoria = props.match.params.job
  const profissaoCode = props.match.params.workers // Não alterar, serve para o html
  var profissao = props.match.params.workers

  const DropdownOrder = [
    { name: 'Destaques', id: "destaque" },
    { name: 'A-Z', id: "a-z" },
  ]
  
  const style = {
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
  }

  const sortDestaque = () => {
    // Busca destacados
    console.log(tempProfissionais)
    let mapped = tempProfissionais.filter((item) => {
      if (item.emphasize == true) {
        for (var i = 0; i < item.jobs.length; i++) {
          if (item.jobs[i] === profissaoCode)
            return item;
        }
      }
    }).map((item) => {
      return item
    });

    setProfissionais(mapped)

    // Coloca não destaques por último
    let mapped2 = tempProfissionais.filter((item) => {
      if (item.emphasize == false) {
        for (var i = 0; i < item.jobs.length; i++) {
          if (item.jobs[i] === profissaoCode)
            return item;
        }
      }
    }).map((item) => {
      return item
    });

    setProfissionais([...profissionais, ...mapped2])
  }

  const onSelect = (selectedList, selectedItem) => {
    if (selectedItem.id === "a-z") {
      setSortType('a-z')
      setProfissionais(tempProfissionais)
    }
    else if (selectedItem.id === "destaque") {
      sortDestaque()
    }
  }

  const handleChange = (event) => {
    const field = event.target.id;
    if (field === "feminino") {
      if (event.target.checked) {
        setOptions([...options, "feminino"], () => {
        })
      } else {
        let index = options.indexOf("feminino");
        options.splice(index, 1)
        setOptions([...options])
      }
    } else if (field === "masculino") {
      if (event.target.checked) {
        setOptions([...options, "masculino"], () => {
        })
      } else {
        let index = options.indexOf("masculino");
        options.splice(index, 1)
        setOptions([...options])
      }
    }
  }

  useEffect(() => {
    let mapped = Database.filter((item) => {
      for (var i = 0; i < item.jobs.length; i++) {
        if (item.jobs[i] === profissaoCode) {
          return item
        }
      }
    }).map((item) => {
      return item
    });
    mapped.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
    setTempProfissionais(mapped)
    console.log(tempProfissionais)
    console.log(mapped)
    sortDestaque()
  }, []);

  // Correção gramatical das categorias
  if (categoria === "manutencao") {
    categoria = "manutenção"
  }
  else if (categoria === "saude") {
    categoria = "saúde"
  }

  // Correção gramatical das profissões
  if (profissao === "animador(a)-de-festas") {
    profissao = "Animador(a) de festas"
  }
  else if (profissao === "artesa(o)") {
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
  else if (profissao === "musico(a)") {
    profissao = "Músico(a)"
  }
  else if (profissao === "passeador(a)-de-caes") {
    profissao = "Passeador(a) de cães"
  }
  else if (profissao === "personal-trainer") {
    profissao = "Personal Trainer"
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
              options={DropdownOrder} // Options to display in the dropdown
              onSelect={onSelect} // Function will trigger on select event
              displayValue="name" // Property name to display in the dropdown options
              id="MultipleDropdownWorkers"
              style={style}
              singleSelect={true}
              avoidHighlightFirstOption={true}
              placeholder="Destaques"
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
              <input type="checkbox" defaultChecked={true} disabled />
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
              <input id="feminino" type="checkbox" onChange={handleChange} />
              <span class="checkmark"></span>
            </label>
            <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
              Feminino
            </label>
          </div>
          <div class="workers-settings-text">
            <label class="container">
              <input id="masculino" type="checkbox" onChange={handleChange} />
              <span class="checkmark"></span>
            </label>
            <label for="checkbox" style={{ marginLeft: "14%", marginBottom: "0%" }}>
              Masculino
            </label>
          </div>
        </div>
        <div id="workers-change-color-on-hover" class="column workers-column-profile">
          {profissionais.filter((item) => {
            if (options.length == 0) {
              return item
            }
            else if (options.includes(item.gender)) {
              return item
            }
          }).map(item =>
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
