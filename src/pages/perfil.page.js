import React, { Component } from "react";
import "../styles/perfil.css";
import swal from '@sweetalert/with-react';

import { IoLogoWhatsapp } from 'react-icons/io';
import LogoOnservice from "../assets/LogoSimboloLaranja.png";

import Database from "../components/Database.js";

export default class Perfil extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tecnologia: [],
      beleza: [],
      saude: [],
      manutencao: [],
      ensino: [],
      eventos: [],
      w2w: "",
      idperfil: this.props.match.params.idperfil,

      DropdownOrder: [
        /* W2W */
        { name: 'Destaque', id: "destaque" },
        { name: 'Avaliação', id: "avaliação" },
      ],
    };
    this.style = {
      chips: {
        background: "rgb(237, 125, 49)"
      },
      searchBox: {
        "border": "0.5pt none rgb(118,113,113)",
        "border-radius": "0.15cm",
        padding: 0,
      },
      inputField: {
        margin: 0,
        "padding-left": "19px",
        width: "100%",
      },
      multiselectContainer: {
        color: "rgb(175,171,171)",
        width: "95%",
        "margin-right": "auto",
        "margin-left": "auto"
      },
      groupHeading: {
        color: "rgb(237, 125, 49)",
      },
      option: { // To change css for dropdown options
        color: "rgb(118,113,113)",
      },
    }
  }

  componentDidMount() {
    console.log(this.props.match.params)
  }

  sendErrorAlertPerfil = () => {
    const { idperfil } = this.state;
    <div>
      {Database.filter((item) => {
        if (item.id === idperfil) return item;
      }).map(item =>
        swal({
          content: (
            <div>
              <img src={LogoOnservice} width="90px" alt="Perfil" />
              <p class="swal-title--perfil">Você está a um passo de contratar {item.name}! </p>
              <p>
                { }
              </p>
              <p class="swal-text--perfil">Ao clicar em <span style={{ fontWeight: "bold" }}>“Entrar em Contato”</span>, você está de acordo com nosso <a href="/termos-de-uso/">Termos de Uso</a> e <a href="/politica-de-privacidade/">Política de Privacidade</a>. Para fazer qualquer tipo de reclamação ou denúncia, envie-nos uma mensagem na aba <a href="/contato/" class="swal-text--newlink">CONTATO</a>!</p>
            </div>
          ),
          button: {
            className: "swal-button--perfil",
            text: "Entrar em contato",
            value: "whatsapp",
          },
        })
          .then((value) => {
            switch (value) {

              case "whatsapp":
                window.open(`https://api.whatsapp.com/send?phone=${item.phone}&text=Ol%C3%A1%2C%20encontrei%20seu%20perfil%20na%20OnService.%20Tenho%20interesse%20em%20seu%20servi%C3%A7o%2C%20voc%C3%AA%20poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F`, `_blank`);

              default:
                break;
            }
          })
      )}
    </div>
  }

  messageContrate = () => {
    this.sendErrorAlertPerfil()
  }

  render() {

    const { idperfil } = this.state;

    return (
      <div class="row row-information-center">
        {Database.filter((item) => {
          if (item.id === idperfil) return item;
        }).map(item =>
          <div>
            <div class="column column-perfilimage">
              <div class="row row-perfilimage">
                <img src={item.picture} width="260px" alt="Perfil" />
              </div>
            </div>
            <div class="column column-perfilinformation">
              <div class="row row-main-information-perfil">
                {/* <div class="column column-perfilcircleimage"> */}
                {/* <div class="row row-perfilcircleimage"> */}
                {/*<img src={Prestadorimage} alt="Perfil" />*/}
                {/*</div>*/}
                {/*</div>*/}
                <div class="column column-perfilnameandbutton">
                  <div class="row row-perfilnameandbutton">
                    <a>{item.name}</a>
                    <hr class="perfil-hr" />
                    <button type='button'
                      onClick={
                        this.messageContrate.bind(this)
                      } class="button-entraremcontato">
                      Entrar em contato
                      <IoLogoWhatsapp id="buttonimageperfil" width="90px" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="row row-professionperfil">
                {item.job.map(jobs =>
                  <p> {jobs}<br /></p>
                )}
                <div class="perfil-description">
                  <label class="perfil-description-text">{item.description}</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
