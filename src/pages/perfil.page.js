import React, { Component } from "react";
import "../styles/perfil.css";
import swal from '@sweetalert/with-react';

import LogoOnservice from "../assets/LogoSimboloLaranja.png";
import Prestadorimage from "../assets/IMG-20190914-WA0056.jpg";
import Whatsappimage from "../assets/whatsappicon.png";


export default class Perfil extends Component {

  sendErrorAlertPerfil = (msg) => {
    swal({
      button: {
        className: "swal-button--contact",
        text: "Entrar em contato",
        icon: "success",
      },
      content: (
        <div>
          <img src={LogoOnservice} width="90px" alt="Perfil" />
          <p class="swal-title--perfil">Você está a um passo de contratar um profissional!</p>
          <p>
            {''}
          </p>
          <p class="swal-text--perfil">Ao clicar em <span style={{ fontWeight: "bold" }}>“Entrar em Contato”</span>, você está de acordo com nosso <a href="/termos-de-uso/">Termos de Uso</a> e <a href="/politica-de-privacidade/">Política de Privacidade</a>. Para fazer qualquer tipo de reclamação ou denúncia, envie-nos uma mensagem na aba <a href="/contato/" class="swal-text--newlink">CONTATO</a>!</p>
        </div>
      )
    })
  }

  messageContrate = () => {
    this.sendErrorAlertPerfil("")
  }

  render() {
    return (
      <div class="row row-information-center">
        <div class="column column-perfilimage">
          <div class="row row-perfilimage">
            <img src={Prestadorimage} width="300px" alt="Perfil" />
          </div>
        </div>
        <div class="column column-perfilinformation">
          <div class="row row-main-information-perfil">
            <div class="column column-perfilcircleimage">
              <div class="row row-perfilcircleimage">
                <img src={Prestadorimage} alt="Perfil" />
              </div>
            </div>
            <div class="column column-perfilnameandbutton">
              <div class="row row-perfilnameandbutton">
                <a>Ednaldo Pereira</a>
                <hr class="perfil-hr" />
                <button type='button'
                  onClick={
                    this.messageContrate.bind(this)
                  } class="button-entraremcontato">
                  Entrar em contato
                      <img id="buttonimageperfil" src={Whatsappimage} width="22px" alt="Perfil" />
                </button>
              </div>
            </div>
          </div>
          <div class="row row-professionperfil">
            <p> Cantor</p>
            <p> Compositor</p>
            <div class="perfil-description">
              <label class="perfil-description-text">O incentivo ao avanço tecnológico, assim como o início da atividade geral de formação de atitudes acarreta um processo de reformulação e modernização das condições financeiras e administrativas exigidas.Caros amigos, a complexidade dos estudos efetuados exige a precisão e a definição dos métodos utilizados na avaliação de resultados. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes.</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
