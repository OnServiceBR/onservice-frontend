import React, { useState, useEffect } from "react";

import ReactGA from 'react-ga';
import "../styles/perfil.css";
import swal from '@sweetalert/with-react';

import { IoLogoWhatsapp } from 'react-icons/io';
import LogoOnservice from "../assets/LogoSimboloLaranja.png";

import Database from "../components/Database.js";
import useWindowSize from "../components/useWindowSize.js";

export default function Perfil(props) {
    const [tecnologia, setTecnologia] = useState([])
    const [beleza, setBeleza] = useState([])
    const [saude, setSaude] = useState([])
    const [manutencao, setManutencao] = useState([])
    const [ensino, setEnsino] = useState([])
    const [eventos, setEventos] = useState([])
    const [w2w, setW2W] = useState("")
    const categoriaCode = props.match.params.job
    var categoria = props.match.params.job
    const profissaoCode = props.match.params.workers
    var profissao = props.match.params.workers
    const idperfil = props.match.params.idperfil
    const size = useWindowSize()
    var ala = 0

    const DropdownOrder = [
      /* W2W */
      { name: 'Destaque', id: "destaque" },
      { name: 'Avaliação', id: "avaliação" },
    ]

    const style = {
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

    const sendErrorAlertPerfil = () => {

      // Correção gramatical das profissões
      if (profissao === "animador(a)-de-festas") {
        profissao = "Animador(a) de festas"
      }
      if (profissao === "artesa(o)") {
        profissao = "Artesã(o)"
      }
      else if (profissao === "assistente-tecnico(a)") {
        profissao = "Assistente Técnico(a)"
      }
      else if (profissao === "designer-grafico") {
        profissao = "Designer Gráfico"
      }
      else if (profissao === "editor(a)-de-videos") {
        profissao = "Editor(a) de Vídeos"
      }
      else if (profissao === "especialista-em-midias") {
        profissao = "Especialista em Mídias"
      }
      else if (profissao === "fotografo(a)") {
        profissao = "Fotógrafo(a)"
      }
      else if (profissao === "fretes-e-mudancas") {
        profissao = "Fretes e Mudanças"
      }
      else if (profissao === "garcom(garconete)") {
        profissao = "Garçom(Garçonete)"
      }
      else if (profissao === "manutencao-de-pabx") {
        profissao = "Manutenção de PABX"
      }
      else if (profissao === "montador(a)-de-moveis") {
        profissao = "Montador(a) de Móveis"
      }
      else if (profissao === "musico(a)") {
        profissao = "Músico(a)"
      }
      else if (profissao === "passeador(a)-de-caes") {
        profissao = "Passeador(a) de cães"
      }
      else if (profissao === "personal-trainer") {
        profissao = "Personal Trainer"
      }
      else if (profissao === "professor(a)-de-educacao-fisica") {
        profissao = "Professor(a) de Educação Física"
      }
      else if (profissao === "professor(a)-de-ingles") {
        profissao = "Professor(a) de Inglês"
      }
      else if (profissao === "professor(a)-de-programacao") {
        profissao = "Professor(a) de Programação"
      }
      else if (profissao === "psicologo(a)") {
        profissao = "Psicólogo(a)"
      }
      else if (profissao === "publicitario(a)") {
        profissao = "Publicitário(a)"
      }

      <div>
        {Database.filter((item) => {
          if (item.id === idperfil) return item;
        }).map(item =>
          swal({
            content: (
              <div>
                <img src={LogoOnservice} class="imagelogo" />
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
                  window.open(`https://api.whatsapp.com/send?phone=55${item.phone}&text=Ol%C3%A1%20${item.name}%2C%20encontrei%20seu%20perfil%20na%20OnService.%20Tenho%20interesse%20em%20seu%20servi%C3%A7o%20de%20${profissao}%2C%20voc%C3%AA%20poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F`, `_blank`);
                  break;
                default:
                  break;
              }
            })
        )}
      </div>
    }

    const messageContrate = () => {
      ReactGA.event({
        category: 'Button',
        action: 'Clicou no botão contrate'
      })
      sendErrorAlertPerfil()
    }

    // Correção gramatical das categorias
    if (categoria === "manutencao") {
      categoria = "manutenção"
    }
    else if (categoria === "saude") {
      categoria = "saúde"
    }

    // Correção gramatical das profissões
    if (profissao === "animador(a)-de-festas") {
      profissao = "Animador(a) de festas"
    }
    if (profissao === "artesa(o)") {
      profissao = "Artesã(o)"
    }
    else if (profissao === "assistente-tecnico(a)") {
      profissao = "Assistente Técnico(a)"
    }
    else if (profissao === "designer-grafico") {
      profissao = "Designer Gráfico"
    }
    else if (profissao === "editor(a)-de-videos") {
      profissao = "Editor(a) de Vídeos"
    }
    else if (profissao === "especialista-em-midias") {
      profissao = "Especialista em Mídias"
    }
    else if (profissao === "fotografo(a)") {
      profissao = "Fotógrafo(a)"
    }
    else if (profissao === "fretes-e-mudancas") {
      profissao = "Fretes e Mudanças"
    }
    else if (profissao === "garcom(garconete)") {
      profissao = "Garçom(Garçonete)"
    }
    else if (profissao === "manutencao-de-pabx") {
      profissao = "Manutenção de PABX"
    }
    else if (profissao === "montador(a)-de-moveis") {
      profissao = "Montador(a) de Móveis"
    }
    else if (profissao === "musico(a)") {
      profissao = "Músico(a)"
    }
    else if (profissao === "passeador(a)-de-caes") {
      profissao = "Passeador(a) de cães"
    }
    else if (profissao === "personal-trainer") {
      profissao = "Personal Trainer"
    }
    else if (profissao === "professor(a)-de-educacao-fisica") {
      profissao = "Professor(a) de Educação Física"
    }
    else if (profissao === "professor(a)-de-ingles") {
      profissao = "Professor(a) de Inglês"
    }
    else if (profissao === "professor(a)-de-programacao") {
      profissao = "Professor(a) de Programação"
    }
    else if (profissao === "psicologo(a)") {
      profissao = "Psicólogo(a)"
    }
    else if (profissao === "publicitario(a)") {
      profissao = "Publicitário(a)"
    }

    if (size.width > 1200) {
      ala = size.width
    }

    return (
      <div>
        <h2>Tela: {ala} px</h2>
        {Database.filter((item) => {
          if (item.id === idperfil) return item;
        }).map(item =>
          <div>
            <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><a class="path" href={`/contrate/${categoriaCode}`}>{categoria}</a><h2 class="path"> &gt; </h2><a class="path" href={`/contrate/${categoriaCode}/${profissaoCode}`}>{profissao}</a><h2 class="path"> &gt; </h2><h2 class="path-actual-name">{item.name}</h2>
            <div class="row row-information-center">
              <div class="column column-perfilimage">
                <div class="row row-perfilimage">
                  <img src={item.picture} width="100%" alt="Perfil" />
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
                          messageContrate
                        } class="button-entraremcontato">
                        Entrar em contato
                        <IoLogoWhatsapp id="buttonimageperfil" width="90px" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row row-professionperfil">
                  {item.jobsRight.map(job =>
                    <p>{job}<br /></p>
                  )}
                  <div class="perfil-description">
                    <label class="perfil-description-text">{item.description}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
    
}
