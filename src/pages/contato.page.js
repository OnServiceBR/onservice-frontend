import React, { useEffect, useState } from "react";
import "../styles/contato.css";
import axios from "axios";
import Contatoimagem from "../assets/Slide2.PNG"

import LogoOnservice from "../assets/LogoSimboloLaranja.png";
import swal from '@sweetalert/with-react'
import { Multiselect } from 'multiselect-react-dropdown';

const SITE_KEY = "6Ldo9loaAAAAADMRNqgi69nefNZrZfluNekE9YJQ";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  const DropdownSubject = [
    { name: "Problemas com a conta" },
    { name: "Problemas com algum serviço realizado" },
    { name: "Dúvidas sobre a OnService" },
    { name: "Reclamações ou Sugestões" },
  ];

  const style = {
    chips: {
      background: "rgb(237, 125, 49)",
      color: "rgb(255,255,255)"
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
      width: "93%",
      "margin-right": "auto",
      "margin-left": "auto"
    },
    groupHeading: {
      color: "rgb(237, 125, 49)",
    },
    option: { // To change css for dropdown options
      color: "rgb(118,113,113)",
    },
  };

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  const handleOnClick = e => {
    e.preventDefault();
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
        submitData(token);
      });
    });
  }

  const sendAlert = (header, msg) => {
    swal({
      className: "swal-dimensions--contact",
      button: {
        className: "button-alert",
      },
      content: (
        <div>
          <img src={LogoOnservice} width="90px" alt="SwalContact" />
          <h3 class="swal-title--contact">{header}</h3>
          <p class="swal-text--contact">
            {msg}
          </p>
          <div class="swal-footer--contact"></div>
        </div>
      )
    })
  }

  const submitData = token => {
    if (name === "") {
      sendAlert("Ops, algo deu errado...", "O campo do nome não pode estar vazio!", "error")
      setLoading(false);
      return
    }
    if (email === "") {
      sendAlert("Ops, algo deu errado...", "O campo do e-mail não pode estar vazio!", "error")
      setLoading(false);
      return
    }
    if (subject === "") {
      sendAlert("Ops, algo deu errado...", "O campo do assunto não pode estar vazio!", "error")
      setLoading(false);
      return
    }
    if (message === "") {
      sendAlert("Ops, algo deu errado...", "O campo da mensagem não pode estar vazio!", "error")
      setLoading(false);
      return
    }
    // call a backend API to verify reCAPTCHA response
    fetch(process.env.REACT_APP_RECAPTCHA, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "g-recaptcha-response": token
      })
    }).then(res => res.json()).then(res => {

      if (res.success) {
        if (name !== "" && email !== "" && message !== "" && subject !== "") {
          const data = {
            name: name,
            email: email,
            message: message,
            subject: subject
          }

          axios.post(process.env.REACT_APP_MAIL_URL, data)
            .then(res => {
              setName("");
              setEmail("");
              setSubject("");
              setMessage("");
              sendAlert("Concluído", "Sua mensagem foi enviada, em breve entraremos em contato com você!", "success")
            }).catch(err => {
              sendAlert("Ops, algo deu errado...", "Nosso sistema pode estar fora do ar, tente novamente mais tarde!", "error")
              console.log(err);
            })
        } else {
          console.log("All the inputs are obrigatory");
        }
      }

      setLoading(false);
    });
  }

  const onSelectSubject = (selectedList, selectedItem) => {
    setSubject(selectedItem.name)
  }

  return (
    <div class="row">
      <div class="col">
        <img src={Contatoimagem} width="500px" alt="Imagem página contato" />
      </div>
      <div class="col form-contact">
        <h3>FALE CONOSCO</h3>
        <div>
          <div class="description">
            <label>Teve algum problema? Tem alguma sugestão? Este é um canal aberto da OnService com seus clientes, para garantir satisfação total para todos os usuários. Sempre utilize-o quando julgar necessário e não hesite em entrar em contato com a OnService.</label>
          </div>
          <form>
            <div class="form-item">
              <label class="label"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Nome:</label>
              <div style={{ textAlign: "center" }}>
                <input id="name" name="name" type="text" placeholder="Insira seu nome completo" onChange={e => setName(e.target.value)} value={name} />
              </div>
            </div>
            <div class="form-item">
              <label class="label"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>E-mail:</label>
              <div style={{ textAlign: "center" }}>
                <input id="email" name="email" type="text" placeholder="Insira seu e-mail" onChange={e => setEmail(e.target.value)} value={email} />
              </div>
            </div>
            <div class="form-item">
              <label class="label"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Assunto:</label>
              <div style={{ textAlign: "center" }}>
                {/* <input id="subject" name="subject" type="text" placeholder="Descreva o assunto" onChange={e => setSubject(e.target.value)} value={subject} /> */}
                <Multiselect
                  options={DropdownSubject} // Options to display in the dropdown
                  onSelect={onSelectSubject} // Function will trigger on select event
                  displayValue="name" // Property name to display in the dropdown options
                  closeOnSelect={true}
                  showArrow={true}
                  id="SubjectDropdown"
                  style={style}
                  singleSelect={true}
                  avoidHighlightFirstOption={true}
                  placeholder="Selecione uma opção"
                />
              </div>
            </div>
            <div class="form-item">
              <label class="label"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Mensagem:</label>
              <div style={{ textAlign: "center" }}>
                <textarea id="message" name="message" class="textarea-contact" rows="6" cols="60" placeholder="Escreva sua mensagem" onChange={e => setMessage(e.target.value)} value={message}></textarea>
              </div>
            </div>
            <div>
              <button class='btn-primary' onClick={handleOnClick} disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;