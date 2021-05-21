import React, { useEffect, useState } from "react";
import "../styles/anunciantes.css";
import Anuncio from "../assets/Anuncio.png";
import Pessoa from '../assets/PessoaX.png'

function Anunciantes() {
    return (
        <div>
            <div class="title-anunciantes"> 
                <h2>Anuncie com a gente!</h2>
            </div>
            <div class="subtitle-anunciantes"> 
                <h2>Você vê o nosso site?</h2>
                <h2>Poderia ver o nome da sua <span style={{color:"rgb(237,125,49)",fontFamily:"'Bebas Neue', cursive", letterSpacing: "2pt"}}>EMPRESA</span></h2>
            </div>
            
            <div class="row row-all-cards" id="cards-change-color-on-hover">
                <a href="/perfil" class="column column-each-card">
                    <div class="row row-card-work">
                        <p>Organizador de festas infantis</p>
                    </div>
                    <hr class="each-card-hr"/>
                    <div class="row row-card-picture">
                        <img src={Pessoa}/>
                    </div>
                    <div class="row row-card-name">
                        <p>Paulonilson</p>
                    </div>
                </a>
                <a href="/perfil" class="column column-each-card">
                    <div class="row row-card-work">
                        <p>Organizador de festas infantis</p>
                    </div>
                    <hr class="each-card-hr"/>
                    <div class="row row-card-picture">
                        <img src={Pessoa}/>
                    </div>
                    <div class="row row-card-name">
                        <p>Paulonilson</p>
                    </div>
                </a>
                <a href="/perfil" class="column column-each-card">
                    <div class="row row-card-work">
                        <p>Organizador de festas infantis</p>
                    </div>
                    <hr class="each-card-hr"/>
                    <div class="row row-card-picture">
                        <img src={Pessoa}/>
                    </div>
                    <div class="row row-card-name">
                        <p>Paulonilson</p>
                    </div>
                </a>
                <a href="/perfil" class="column column-each-card">
                    <div class="row row-card-work">
                        <p>Organizador de festas infantis</p>
                    </div>
                    <hr class="each-card-hr"/>
                    <div class="row row-card-picture">
                        <img src={Pessoa}/>
                    </div>
                    <div class="row row-card-name">
                        <p>Paulonilson</p>
                    </div>
                </a>
                <a href="/perfil" class="column column-each-card">
                    <div class="row row-card-work">
                        <p>Organizador de festas infantis</p>
                    </div>
                    <hr class="each-card-hr"/>
                    <div class="row row-card-picture">
                        <img src={Pessoa}/>
                    </div>
                    <div class="row row-card-name">
                        <p>Paulonilson</p>
                    </div>
                </a>
            </div>
            
            
            <div class="ad-images">
                <img src={Anuncio} width="330px"/>
            </div>
            
            
        </div>
    );
}
export default Anunciantes;