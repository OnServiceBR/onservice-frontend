import React, {useState, useEffect} from "react";
import Database from "./Database";
import "../pages/trabalhos/Beleza";
import "../pages/trabalhos/Ensino";
import "../pages/trabalhos/Eventos";
import "../pages/trabalhos/Manutencao";
import "../pages/trabalhos/Outros";
import "../pages/trabalhos/Residencial";
import "../pages/trabalhos/Saude";
import "../pages/trabalhos/Tecnologia";

const Job = (props) => {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    props.jobs.map((trabalhos) => {
      Database.map(alljobs =>
        alljobs.jobsRight.map((each) => {
          if (each === trabalhos.job) {
            setCount(prevCount => prevCount + 1)
            console.log(each)
          }
        })
      )
    })
  },[])

  return (
    <div class="job-link">
      <a href={props.JobLink}>
        <div class="row">
          <div class="column job-imagecontainer">
            <img alt="" class="job-icon-gray-class" src={props.IconGray}/>
            <img alt="" class="job-icon-orange-class" src={props.IconOrange}/>
          </div>
          <div class="column job-textcontainer">
            <p class="job-name">{props.JobName}</p>
            <p class="job-workers-count">{count} profissionais</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Job