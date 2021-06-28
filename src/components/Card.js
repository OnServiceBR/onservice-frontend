import React from "react";

const Card = (props) => {
    return (
    <div class="row row-all-cards" id="cards-change-color-on-hover">
        <a href="/perfil" class="column column-each-card">
            <div class="row row-card-work">
                <p>{props.Job}</p>
            </div>
            <hr class="each-card-hr"/>
            <div class="row row-card-picture">
                <img alt="" src={props.Picture}/>
            </div>
            <div class="row row-card-name">
                <p>{props.Name}</p>
            </div>
        </a>
    </div>
    )
}

export default Card