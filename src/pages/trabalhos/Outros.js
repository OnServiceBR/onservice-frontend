import React, { useEffect, useState } from "react";
import "../../styles/trabalhos.css";
import { FaSearch } from 'react-icons/fa';

import Job from "../../components/Job";

function Outros() {
  const jobs = [
    { job: "Artesã(o)", link: "/contrate/outros/artesa(o)", count: "3", iconC: "../assets/icones/ArtesaoC.png", iconL: "../assets/icones/ArtesaoL.png" },
    { job: "Desenhista", link: "/contrate/outros/desenhista", count: "4", iconC: "../assets/icones/DesenhistaC.png", iconL: "../assets/icones/DesenhistaL.png" },
    { job: "Fretes e Mudanças", link: "/contrate/outros/fretes-e-mudancas", count: "5", iconC: "../assets/icones/FretesC.png", iconL: "../assets/icones/FretesL.png" },
    { job: "Marceneiro(a)", link: "/contrate/outros/marceneiro(a)", count: "6", iconC: "../assets/icones/MarceneiroC.png", iconL: "../assets/icones/MarceneiroL.png" },
    { job: "Montador(a) de Móveis", link: "/contrate/outros/montador(a)-de-moveis", count: "6", iconC: "../assets/icones/MontadordeMoveisC.png", iconL: "../assets/icones/MontadordeMoveisL.png" },
    { job: "Motoboy", link: "/contrate/outros/motoboy", count: "7", iconC: "../assets/icones/MotoboyC.png", iconL: "../assets/icones/MotoboyL.png" },
    { job: "Motorista Particular", link: "/contrate/outros/motorista-particular", count: "7", iconC: "../assets/icones/MotoristaParticularC.png", iconL: "../assets/icones/MotoristaParticularL.png" },
    { job: "Passeador(a) de cães", link: "/contrate/outros/passeador(a)-de-caes", count: "7", iconC: "../assets/icones/PasseadordeCaesC.png", iconL: "../assets/icones/PasseadordeCaesL.png" },
    { job: "Publicitário(a)", link: "/contrate/outros/publicitario(a)", count: "7", iconC: "../assets/icones/PublicitarioC.png", iconL: "../assets/icones/PublicitarioL.png" },
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
      <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Outros</h2>
      <div class="search-box">
        <form method="get" action="/contrate">
          <div id="search-contrate">
            {/* Icone de busca */}
            <input id="search-input-contrate" placeholder="Buscar por um profissional" />
            <FaSearch id="search-lupe" />
          </div>
          <button id="search-button-contrate" type="submit">
            Buscar
          </button>
        </form>
      </div>
      <div class="search-tabs">
        <a href="javascript:history.back()">
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

export default Outros