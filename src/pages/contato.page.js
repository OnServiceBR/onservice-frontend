import React, { Component } from "react";
import "../styles/contato.css";
import sideForm from '../assets/undraw_personal_text_vkd8.png';

export default class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
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
                        <form action="" class="form-contato">
                            <input type="text" class='form-control' placeholder="Nome Completo" name='nome_completo' />
                            <input type="text" class='form-control' placeholder="Cidade" name='cidade' />
                            <input type="email" class='form-control' placeholder="E-mail" name='email' />
                            <input type="text" class='form-control' placeholder="Assunto" name='subject' />
                            <textarea class='form-control' rows='3' placeholder="Sua mensagem..." name='message'></textarea>
                            <input type="submit" id='procurar-btn2' value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {

  }
}
