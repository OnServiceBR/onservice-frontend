import React, { useEffect, useState } from "react";
import "../styles/anunciantes.css";
import Anuncio from "../assets/Anuncio.png";
import Pessoa from '../assets/PessoaX.png'
import Megafone from '../assets/megafone.png'

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
            <br/>
            <br/>
            <div class="row row-all-ad-images">
                <div class="column column-each-side-ad" id="side-ad-change-color-on-hover">
                    <div class="row row-title-side-ad">
                        <p>VISUALIZAÇÃO</p>
                    </div>
                    <div class="row row-text-side-ad">
                        <p>
                            <span style={{color:"rgb(237,125,49)"}}>Mínimo</span> de<br/>
                            <span style={{color:"rgb(237,125,49)"}}>150 pessoas</span><br/>
                            vendo o seu<br/>
                            anúncio<br/>
                        </p>
                    </div>
                </div>
                <div class="column column-each-side-ad" id="side-ad-change-color-on-hover">
                    <div class="row row-title-side-ad">
                        <p>ALCANCE</p>
                    </div>
                    <div class="row row-text-side-ad">
                        <p>
                            Possibilidade<br/>
                            de mais de<br/>
                            <span style={{color:"rgb(237,125,49)"}}>mil pessoas</span><br/>
                            por <span style={{color:"rgb(237,125,49)"}}>mês</span><br/>
                        </p>
                    </div>
                </div>
                <div class="column column-central-ad">
                    <img src={Anuncio} width="300px"/>
                </div>
                <div class="column column-each-side-ad" id="side-ad-change-color-on-hover">
                    <div class="row row-title-side-ad">
                        <p>PÚBLICO ALVO</p>
                    </div>
                    <div class="row row-text-side-ad">
                        <p>
                            Jovens de<br/>
                            <span style={{color:"rgb(237,125,49)"}}>18</span> a <span style={{color:"rgb(237,125,49)"}}>24 anos</span><br/>
                            <br/>
                            Profissionais de<br/>
                            <span style={{color:"rgb(237,125,49)"}}>35</span> a <span style={{color:"rgb(237,125,49)"}}>65 anos</span><br/>
                        </p>
                    </div>
                </div>
                <div class="column column-each-side-ad" id="side-ad-change-color-on-hover">
                    <div class="row row-title-side-ad">
                        <p>EXCLUSIVIDADE</p>
                    </div>
                    <div class="row row-text-side-ad">
                        <p>
                            Possibilidade<br/>
                            de mais de<br/>
                            <span style={{color:"rgb(237,125,49)"}}>mil pessoas</span><br/>
                            por <span style={{color:"rgb(237,125,49)"}}>mês</span><br/>
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="row row-anuncio">
                <div class="column column-left">
                    <div class= "row row-megafone">
                        <img id="megafone" src={Megafone} width="220px" alt="megafone"/>
                    </div>
                </div>
                <div class="column column-right">
                    <div class="row row-right">
                        <p>Para entrar em contato conosco, basta enviar um e-mail para <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>onservicesac@gmail.com</span> ou acessar nossa aba <span style={{color:"rgb(237,125,49)",fontWeight:"bold"}}>CONTATO</span> e enviar uma mensagem!</p>
                        <form method="get" action="/contato">
                            <button class="btn-contact">
                                Clique aqui para entrar em CONTATO
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Anunciantes;