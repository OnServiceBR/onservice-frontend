import React, { Component } from "react";
import "../../styles/trabalhos.css";

import Job from "../../components/Job";

export default class Home extends Component {
  constructor(props){
    super(props)
    this.jobs = [
      {job:"Arvore", link:"/contrate/saude/arvore", count:"3", iconC:"../assets/icones/CabeleireiroC.png", iconL:"../assets/icones/CabeleireiroL.png"},
      {job:"Banana", link:"/contrate/saude/banana", count:"4", iconC:"../assets/icones/BarbeiroC.png", iconL:"../assets/icones/BarbeiroL.png"},
      {job:"Carro", link:"/contrate/saude/carro", count:"5", iconC:"../assets/icones/ManicureC.png", iconL:"../assets/icones/ManicureL.png"},
      {job:"Dado", link:"/contrate/saude/dado", count:"6", iconC:"../assets/icones/GarcomC.png", iconL:"../assets/icones/GarcomL.png"},
      {job:"Estojo", link:"/contrate/saude/estojo", count:"7", iconC:"../assets/icones/CozinheiroC.png", iconL:"../assets/icones/CozinheiroL.png"},
    ]
  }

  render() {
    const jobs = this.jobs;
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    return(
      <div>
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Saude</h2>
        <div class="search-box">
          <form method="get" action="/contrate">
            <div id="search-contrate">
              {/* Icone de busca */}
              <input id="search-input-contrate" placeholder="Buscar por um profissional"/>
            </div>
            <button id="search-button-contrate" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div class="search-tabs">
          <a href="javascript:history.back()">
            <label id="trabalhos-category-label"  class="link-bar-label">Categorias</label>
          </a>
          <label id="trabalhos-service-label">Serviços</label>
          <label id="trabalhos-job-label">Profissionais</label>
        </div>
        <div class="job-dictionary">
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
        {alphabet.map(letter => (
          <div>
            <hr class="job-hr"/>
            <h1 class="job-dictionary-letter">{letter}<a name={`names-${letter}`}></a></h1>
            <hr class="job-hr"/>
            {jobs.filter((item) => {
              if(item.job[0] === letter) return item;
            }).map(item =>
              <Job
              JobName={item.job}
              JobLink={item.link}
              JobCount={item.count}
              IconGray={item.iconC}
              IconOrange={item.iconL}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
}
