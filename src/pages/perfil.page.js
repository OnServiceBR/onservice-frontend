import React, { Component } from "react";
import "../styles/perfil.css";
import swal from '@sweetalert/with-react';

import LogoOnservice from "../assets/LogoSimboloLaranja.png";
import Prestadorimage from "../assets/IMG-20190914-WA0056.jpg";
import Whatsappimage from "../assets/whatsappicon.png";
import Fotoperfil from "../assets/edinaldocirculo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
          <img src={Prestadorimage} width="300px" alt="Perfil" />
        </div>
      </div>

    )
  }
}
