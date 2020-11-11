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
    }
  }

  sendMessage = (e) => {
    e.preventDefault();

    if(this.state.name !== "" && this.state.city !== "" && this.state.email !== "" && this.state.subject !== "" && this.state.message !== ""){
      const data = this.state

      axios.post(process.env.REACT_APP_MAIL_URL, data)
      .then(res => {
        console.log(res)
        this.setState({ name: "", city: "", email: "", subject: "", message: "" });
        return res.json();
      }).catch(err => {
        console.log(err);
      })

    }else{
      console.log("All the inputs are obrigatory");
    }

  }

  render() {
    return(
      <div class="container-fluid" id="contact-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6" id="foto-contato">
                <img src={sideForm} alt="Imagem do formulário" />
            </div>
            <div class="col-md-6" id='contact-form'>
              <h2>Teve algum problema? Alguma sugestão?<br />Fale Conosco!</h2>
              <small class='form-text text-muted'>A OnService tem a missão de garantir satisfação total para todos os usuários.<br />
              Se teve qualquer tipo de problema com algum serviço contratado<br />ou se tiver quaisquer sugestões, não hesite!<br />Fale conosco.</small>
              <form onSubmit={this.sendMessage} class="form-contato">
                <input type="text" class='form-control' id="name" placeholder="Nome Completo" name='name' onChange={this.handleChange.bind(this)} value={this.state.name} />
                <input type="text" class='form-control' id="city" placeholder="Cidade" name='city' onChange={this.handleChange.bind(this)} value={this.state.city} />
                <input type="email" class='form-control' id="email" placeholder="E-mail" name='email' onChange={this.handleChange.bind(this)} value={this.state.email} />
                <input type="text" class='form-control' id="subject" placeholder="Assunto" name='subject' onChange={this.handleChange.bind(this)} value={this.state.subject} />
                <textarea class='form-control' rows='3' id="message" placeholder="Sua mensagem..." name='message' onChange={this.handleChange.bind(this)} value={this.state.message}></textarea>
                <input type="submit" id='procurar-btn2' value="Enviar" />
              </form>
            </div>
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
