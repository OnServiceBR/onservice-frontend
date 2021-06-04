import React, { useEffect, useState } from "react";
import "../../styles/trabalhos.css";
import { FaSearch } from 'react-icons/fa';

import Job from "../../components/Job";

function Tecnologia() {
  const [jobs, setJobs] = useState([
    {job:"Analista de Sistemas", link:"/contrate/tecnologia/analista-de-sistemas", count:"3", iconC:"../assets/icones/AnalistadeSistemasC.png", iconL:"../assets/icones/AnalistadeSistemasL.png"},
    {job:"Assistente Técnico", link:"/contrate/tecnologia/assistente-tecnico", count:"4", iconC:"../assets/icones/AssistenteTecnicoC.png", iconL:"../assets/icones/AssistenteTecnicoL.png"},
    {job:"Designer Gráfico", link:"/contrate/tecnologia/designer-grafico", count:"5", iconC:"../assets/icones/DesignerGraficoC.png", iconL:"../assets/icones/DesignerGraficoL.png"},
    {job:"Editor(a) de Vídeos", link:"/contrate/tecnologia/editor-de-videos", count:"6", iconC:"../assets/icones/EditordevideoC.png", iconL:"../assets/icones/EditordevideoL.png"},
    {job:"Manutenção de PABX", link:"/contrate/tecnologia/manutencao-de-pabx", count:"7", iconC:"../assets/icones/PABXC.png", iconL:"../assets/icones/PABXL.png"},
    {job:"Programador", link:"/contrate/tecnologia/programador", count:"7", iconC:"../assets/icones/ProgramadorC.png", iconL:"../assets/icones/ProgramadorL.png"},
])

  const [alphabet, setAlphabet] = useState([])
  
  useEffect(() => {
    let prevLet = ""
    for(let i = 0; i<jobs.length; i++){
      if(jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === prevLet){
        continue
      }else{
        prevLet = jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        setAlphabet(alphabet => [...alphabet, jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")])
      }
    }
  }, [])

  return(
    <div>
      <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Tecnologia</h2>
      <div class="search-box">
        <form method="get" action="/contrate">
          <div id="search-contrate">
            {/* Icone de busca */}
            <input id="search-input-contrate" placeholder="Buscar por um profissional"/>
            <FaSearch id="search-lupe"/>
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
            if(item.job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === letter) return item;
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

export default Tecnologia