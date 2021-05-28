import React, { Component } from "react";
import "../styles/perfil.css";
import swal from '@sweetalert/with-react';


import Prestadorimage from "../assets/IMG-20190914-WA0056.jpg";
import Whatsappimage from "../assets/whatsappicon.png";
import Fotoperfil from "../assets/edinaldocirculo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Perfil extends Component {

  sendErrorAlertPerfil = (msg) => {
    swal({
      button: {
        text: "Entrar em contato",
      },
      content: (
        <div>
          <img src={Prestadorimage} width="90px" alt="Perfil" />
          <p class="swal-title">Você está a um passo de contratar um profissional!</p>
          <p>
            {''}
          </p>
          <p class="swal-text">Ao clicar em <span style={{ fontWeight: "bold" }}>“Entrar em Contato”</span>, você está de acordo com nosso <a href="/termos-de-uso/">Termos de Uso</a> e <a href="/politica-de-privacidade/">Política de Privacidade</a>. Para fazer qualquer tipo de reclamação ou denúncia, envie-nos uma mensagem na aba <a href="/contato/" class="swal-text--newlink">CONTATO</a>!</p>
        </div>
      )
    })
  }


  messageContrate = () => {
    this.sendErrorAlertPerfil("")
  }


  render() {
    return (
      <div class="row">
        <div class="information-center">
          <div class="row">
            < div class="col-5">
              <div class="perfilimage">
                <img src={Prestadorimage} width="300px" alt="Perfil" />
              </div>
            </div>

            <div class="col-7" id="colpaddingnone" >
              <div class="row">
                < div class="col-3" id="colpaddingtop">
                  <img src={Fotoperfil} width="90%" alt="Perfil" />
                </div>

                <div class="col-9">
                  <div class="perfilphrase">
                    <p class="perfil-h1">Ednaldo Pereira</p>
                  </div>
                  <hr class="perfil-hr" />
                  <button type='button'
                    onClick={
                      this.messageContrate.bind(this)
                    } class="button-entraremcontato">
                    Entrar em contato
                        <img id="buttonimage" src={Whatsappimage} width="22px" alt="Perfil" />
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <p class="perfil-right">Cantor</p>
                  <p class="perfil-right-abaixo">Revendedor Jequiti</p>
                </div>
                <div class="col-3" id="colpaddingnone">
                  {/*<img id="clasifyimage" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage2" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage2" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage2" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage2" src={Anuncieimagem} width="22px" alt="Perfil"/>
                      <img id="clasifyimage2" src={Anuncieimagem} width="22px" alt="Perfil"/>*/}
                </div>
                <div class="col-4" id="colpaddingnone">
                  {/*
                      <p class="perfil-left">9 avaliações</p>
                      <p class="perfil-left-abaixo">2 avaliações</p>*/}
                </div>
              </div>
              <div class="perfil-description">
                <label class="perfil-description-text">O incentivo ao avanço tecnológico, assim como o início da atividade geral de formação de atitudes acarreta um processo de reformulação e modernização das condições financeiras e administrativas exigidas.Caros amigos, a complexidade dos estudos efetuados exige a precisão e a definição dos métodos utilizados na avaliação de resultados. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes.</label>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
