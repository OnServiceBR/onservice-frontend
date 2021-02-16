import React, { useEffect, useState } from "react";
import "../styles/contato.css";
import axios from "axios";
const SITE_KEY = "6Ldo9loaAAAAADMRNqgi69nefNZrZfluNekE9YJQ";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  
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

  const submitData = token => {
    // call a backend API to verify reCAPTCHA response
    fetch(process.env.REACT_APP_RECAPTCHA, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "g-recaptcha-response": token
      })
    }).then(res => res.json()).then(res => {
      
      if (res.success) {
        if(name !== "" && email !== ""){
          const data = {
            name: name,
            email: email
          }
    
          axios.post(process.env.REACT_APP_MAIL_URL, data)
          .then(res => {
            console.log(res)
            this.setState({ name: "", email: "", message: "" });
            return res.json();
          }).catch(err => {
            console.log(err);
          })
        }else{
          console.log("All the inputs are obrigatory");
        }
      }

      setLoading(false);
      setResponse(res);
    });
  }

  return (
    <div class="row">
      <div class="col">
        1 de 2
      </div>
      <div class="col form-contact">
        <h3>FALE CONOSCO</h3>
        <div>
          <div class="description">
            <label>A OnService agradece a mensagem. Dentro de, no máximo, 3 dias, sua mensagem será respondida pela nossa equipe. Continuamos abertos a outras sugestões e/ou reclamações.<br />Muito obrigada por usar nosso site!</label>
          </div>
          <form>
            <div class="form-item">
              <label class="label">Nome:</label>
              <div style={{textAlign: "center"}}>
                <input id="name" name="name" type="text" placeholder="Insira seu nome completo" onChange={e => setName(e.target.value)} value={name} />
              </div>
            </div>
            <div class="form-item">
              <label class="label">Email:</label>
              <div style={{textAlign: "center"}}>
                <input id="email" name="email" type="text" placeholder="Insira seu email" onChange={e => setEmail(e.target.value)} value={email} />
              </div>
            </div>
            <div class="form-item">
              <label class="label">Mensagem:</label>
              <div style={{textAlign: "center"}}>
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