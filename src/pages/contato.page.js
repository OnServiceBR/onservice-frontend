import React, { Component, useState } from "react";
import axios from "axios";
import "../styles/contato.css";
import sideForm from '../assets/undraw_personal_text_vkd8.png';

export default class Contato extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      city: "",
      email: "",
      subject: "",
      message: "",
      desc: "",
    }
  }

  sendMessage = (e) => {
    e.preventDefault();

    if(this.state.name !== "" && this.state.email !== "" && this.state.message !== ""){
      const data = this.state

      axios.post(process.env.REACT_APP_MAIL_URL, data)
      .then(res => {
        console.log(res)
        this.setState({ name: "", email: "", message: "" });
        return res.json();
      }).catch(err => {
        console.log(err);
      })

      this.setState({desc: <div class="description">
        <label>A OnService agradece a mensagem. Dentro de, no máximo, 3 dias, sua mensagem será respondida pela nossa equipe. Continuamos abertos a outras sugestões e/ou reclamações.<br />Muito obrigada por usar nosso site!</label>
      </div>});

    }else{
      console.log("All the inputs are obrigatory");
    }
  }

  render() {
    const {desc} = this.state;
    return(
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
            <form onSubmit={this.sendMessage}>
              <div class="form-item">
                <label class="label">Nome:</label>
                <div style={{textAlign: "center"}}>
                  <input id="name" name="name" type="text" placeholder="Insira seu nome completo" onChange={this.handleChange.bind(this)} value={this.state.name} />
                </div>
              </div>
              <div class="form-item">
                <label class="label">Email:</label>
                <div style={{textAlign: "center"}}>
                  <input id="email" name="email" type="text" placeholder="Insira seu email" onChange={this.handleChange.bind(this)} value={this.state.email} />
                </div>
              </div>
              <div class="form-item">
                <label class="label">Mensagem:</label>
                <div style={{textAlign: "center"}}>
                  <textarea id="message" name="message" class="textarea-contact" rows="6" cols="60" placeholder="Escreva sua mensagem" onChange={this.handleChange.bind(this)} value={this.state.message}></textarea>
                </div>
              </div>
              <div>
                <button type='submit' class='btn-primary'>Enviar</button>
              </div>
            </form>
            {desc}
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "city") {
      this.setState({ city: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "subject") {
      this.setState({ subject: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }
}
