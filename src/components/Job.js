import React from "react";

const Job = (props) => {
  return (
    <div class="job-link">
      <a href={props.JobLink}>
        <div class="row">
          <div class="column job-imagecontainer">
            <img class="job-icon-gray-class" src={props.IconGray}/>
            <img class="job-icon-orange-class" src={props.IconOrange}/>
          </div>
          <div class="column job-textcontainer">
            <p class="job-name">{props.JobName}</p>
            <p class="job-workers-count">{props.JobCount} profissionais</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Job