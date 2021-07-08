import React, { useEffect, useState } from "react";
import "../../styles/trabalhos.css";
import { FaSearch } from 'react-icons/fa';

import Job from "../../components/Job";

function Tecnologia() {
  const jobs = [
    // { job: "Analista de Sistemas", link: "/contrate/tecnologia/analista-de-sistemas/", count: "0", iconC: "../assets/icones/AnalistadeSistemasC.png", iconL: "../assets/icones/AnalistadeSistemasL.png" },
    { job: "Assistente Técnico(a)", link: "/contrate/tecnologia/assistente-tecnico(a)/", count: "1", iconC: "../assets/icones/AssistenteTecnicoC.png", iconL: "../assets/icones/AssistenteTecnicoL.png" },
    { job: "Consultor(a) de Marketing Digital", link: "/contrate/tecnologia/consultor(a)-de-marketing-digital/", count: "1", iconC: "../assets/icones/ConsultordeMarketingDigitalC.png", iconL: "../assets/icones/ConsultordeMarketingDigitalL.png" },
    { job: "Designer Gráfico", link: "/contrate/tecnologia/designer-grafico/", count: "0", iconC: "../assets/icones/DesignerGraficoC.png", iconL: "../assets/icones/DesignerGraficoL.png" },
    { job: "Editor(a) de Vídeos", link: "/contrate/tecnologia/editor(a)-de-videos", count: "1", iconC: "../assets/icones/EditordevideoC.png", iconL: "../assets/icones/EditordevideoL.png" },
    // { job: "Especialista em Mídias", link: "/contrate/tecnologia/especialista-em-midias/", count: "8", iconC: "../assets/icones/EspecialistaemmidiasC.png", iconL: "../assets/icones/EspecialistaemmidiasL.png" },
    { job: "Manutenção de PABX", link: "/contrate/tecnologia/manutencao-de-pabx/", count: "1", iconC: "../assets/icones/PABXC.png", iconL: "../assets/icones/PABXL.png" },
    { job: "Programador(a)", link: "/contrate/tecnologia/programador(a)/", count: "2", iconC: "../assets/icones/ProgramadorC.png", iconL: "../assets/icones/ProgramadorL.png" },
  ]

  const [alphabet, setAlphabet] = useState([])

  useEffect(() => {
    let prevLet = ""
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === prevLet) {
        continue
      } else {
        prevLet = jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        setAlphabet(alphabet => [...alphabet, jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")])
      }
    }
  }, [])

  return (
    <div>
      <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Tecnologia</h2>
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
          <label id="trabalhos-category-label" class="link-bar-label">Categorias</label>
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
      <br />

      {alphabet.map(letter => (
        <div>
          <hr class="job-hr" />
          <h1 class="job-dictionary-letter">{letter}<a name={`names-${letter}`}></a></h1>
          <hr class="job-hr" />
          {jobs.filter((item) => {
            if (item.job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === letter) return item;
          }).map(item =>
            <Job
              JobName={item.job}
              JobLink={item.link}
              IconGray={item.iconC}
              IconOrange={item.iconL}
              Count={item.count}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Tecnologia