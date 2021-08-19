import React, { useEffect, useState } from "react";
import "../../styles/trabalhos.css";
import { FaSearch } from 'react-icons/fa';
import Counter from "../../components/Counter";

import Job from "../../components/Job";

function Beleza() {

  const jobs = [
    { job: "Barbeiro(a)", link: "/contrate/beleza/barbeiro(a)", count: "", iconC: "../../assets/icones/BarbeiroC.png", iconL: "../../assets/icones/BarbeiroL.png" },
    { job: "Cabeleireiro(a)", link: "/contrate/beleza/cabeleireiro(a)", count: "", iconC: "../../assets/icones/CabeleireiroC.png", iconL: "../../assets/icones/CabeleireiroL.png" },
    { job: "Depilador(a)", link: "/contrate/beleza/depilador(a)", count: "", iconC: "../../assets/icones/DepiladorC.png", iconL: "../../assets/icones/DepiladorL.png" },
    { job: "Esteticista", link: "/contrate/beleza/esteticista", count: "", iconC: "../../assets/icones/EsteticistaC.png", iconL: "../../assets/icones/EsteticistaL.png" },
    { job: "Manicure", link: "/contrate/beleza/manicure", count: "", iconC: "../../assets/icones/ManicureC.png", iconL: "../../assets/icones/ManicureL.png" },
    { job: "Maquiador(a)", link: "/contrate/beleza/maquiador(a)", count: "", iconC: "../../assets/icones/MaquiadorC.png", iconL: "../../assets/icones/MaquiadorL.png" },
    { job: "Micropigmentador(a)", link: "/contrate/beleza/micropigmentador(a)", count: "", iconC: "../../assets/icones/MicropigmentadorC.png", iconL: "../../assets/icones/MicropigmentadorL.png" },
  ]

  const [alphabet, setAlphabet] = useState([])

  useEffect(() => {
    {
      jobs.map((item) => {
        Counter.filter((item2) => {
          if (item2.jobCounted === item.job) {
            item.count = item2.counter
          }
        })
      })
    }
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
    // Tentar fazer o contador no futuro usando Array ou outro jeito
    // for ( let i = 0; i < jobs.length; i++) {
    //         Database.map((alljobs) => 
    //     alljobs.jobsRight.map((eachjob) => {
    //       if (eachjob === jobs[i].job) {
    //         setCount(prevCount => prevCount + 1)
    //       }
    //     })
    //   )
    //   let obj = JSON.parse(jobs[i])
    //   obj.count = count
    //   setCount (0)
    // }
  }, [])

  return (
    <div>
      <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Beleza</h2>
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

export default Beleza