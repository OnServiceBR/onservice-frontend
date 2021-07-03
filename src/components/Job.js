import React from "react";
import "../pages/trabalhos/Beleza";
import "../pages/trabalhos/Ensino";
import "../pages/trabalhos/Eventos";
import "../pages/trabalhos/Manutencao";
import "../pages/trabalhos/Outros";
import "../pages/trabalhos/Residencial";
import "../pages/trabalhos/Saude";
import "../pages/trabalhos/Tecnologia";

const Job = (props) => {
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
            <p class="job-workers-count">{props.Count} profissionais</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Job