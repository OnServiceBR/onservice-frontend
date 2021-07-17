import React, { useEffect, useState } from "react";
import "../../styles/trabalhos.css";
import { FaSearch } from 'react-icons/fa';
import Counter from "../../components/Counter";

import Job from "../../components/Job";

function Outros() {
  const jobs = [
    { job: "Artesã(o)", link: "/contrate/outros/artesa(o)", count: "", iconC: "../assets/icones/ArtesaoC.png", iconL: "../assets/icones/ArtesaoL.png" },
    { job: "Desenhista", link: "/contrate/outros/desenhista", count: "", iconC: "../assets/icones/DesenhistaC.png", iconL: "../assets/icones/DesenhistaL.png" },
    { job: "Fretes e Mudanças", link: "/contrate/outros/fretes-e-mudancas", count: "1", iconC: "../assets/icones/FretesC.png", iconL: "../assets/icones/FretesL.png" },
    { job: "Marceneiro(a)", link: "/contrate/outros/marceneiro(a)", count: "", iconC: "../assets/icones/MarceneiroC.png", iconL: "../assets/icones/MarceneiroL.png" },
    { job: "Montador(a) de Móveis", link: "/contrate/outros/montador(a)-de-moveis", count: "", iconC: "../assets/icones/MontadordeMoveisC.png", iconL: "../assets/icones/MontadordeMoveisL.png" },
    { job: "Motoboy", link: "/contrate/outros/motoboy", count: "1", iconC: "../assets/icones/MotoboyC.png", iconL: "../assets/icones/MotoboyL.png" },
    { job: "Motorista Particular", link: "/contrate/outros/motorista-particular", count: "", iconC: "../assets/icones/MotoristaParticularC.png", iconL: "../assets/icones/MotoristaParticularL.png" },
    { job: "Passeador(a) de Cães", link: "/contrate/outros/passeador(a)-de-caes", count: "1", iconC: "../assets/icones/PasseadordeCaesC.png", iconL: "../assets/icones/PasseadordeCaesL.png" },
    { job: "Publicitário(a)", link: "/contrate/outros/publicitario(a)", count: "1", iconC: "../assets/icones/PublicitarioC.png", iconL: "../assets/icones/PublicitarioL.png" },
  ]

  const [alphabet, setAlphabet] = useState([])

  useEffect(() => {
    {jobs.map((item) => {
      Counter.filter((item2) => {
        if (item2.jobCounted === item.job) {
          item.count = item2.counter
        }
      })
    })}
    let prevLet = ""
    for (let i = 0; i < jobs.length; i++) {
      console.log(jobs[i].count)
      if (jobs[i].count != 0) {
        if (jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === prevLet) {
          continue
        } else {
          prevLet = jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          setAlphabet(alphabet => [...alphabet, jobs[i].job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")])
        }
      }
    }
  }, [])

  return (
    <div>
      <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Outros</h2>
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
            if (item.job[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === letter) return item            
          }).map((item) => {
            Counter.filter((item2) => {
              if (item2.jobCounted === item.job) {
                item.count = item2.counter
              }
            })
            if (item.count != 0) {
              return (
                <Job
                  JobName={item.job}
                  JobLink={item.link}
                  IconGray={item.iconC}
                  IconOrange={item.iconL}
                  Count={item.count}
                />
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Outros