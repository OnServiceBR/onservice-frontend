import React, { Component } from "react";
import "../styles/footer.css";
import logo from '../assets/Logo-e-Slogan-Branco(1).png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render(){
    return(
      <div>
        <footer>
          <div class="container-fluid">
            <img src={logo} alt="Logo OnService" />
            <p>Nossa missão é ser uma plataforma que simplifique e facilite o contato entre o prestador de serviços e<br />
              o contratante. Ser uma rede que reúne um grande leque de profissionais, facilitando a conexão<br />
              daquele que melhor satisfaça as necessidades do usuário.</p>
            <ul class="social">
              <li><a href="https://www.facebook.com/OnServiceOficial"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
              <li><a href="https://www.instagram.com/onserviceoficial/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
              <li><a href="https://www.linkedin.com/company/onserviceoficial"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
            </ul>
          </div>
        </footer>
        <div class="socket">
          <a href="https://onservicebr.com">OnService &copy;, todos os direitos reservados</a>
        </div>
      </div>
    )
  }
}
