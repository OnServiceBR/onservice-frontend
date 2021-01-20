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
            <div class="row row-size">
              <div class="col">
                <label class="footer-title">Informações</label><br />
                <label class="footer-content">Como utilizar o site</label><br />
                <label class="footer-content">Como utilizar o app</label><br />
                <label class="footer-content">Fale conosco</label>
              </div>
              <div class="col">
                <label class="footer-title">OnService</label><br />
                <label class="footer-content">Sobre a OnService</label><br />
                <label class="footer-content">Fale conosco</label><br />
                <label class="footer-content">Anuncie com a gente</label>
              </div>
              <div class="col">
                <label class="footer-title-2">Confira</label>
                <ul class="social">
                  <li><a href="https://www.facebook.com/OnServiceOficial"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a></li>
                  <li><a href="https://www.instagram.com/onserviceoficial/"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/></a></li>
                  <li><a href="https://www.linkedin.com/company/onserviceoficial"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a></li>
                </ul>
              </div>
            </div>
            <hr />
            <div class="socket">
              <label>O uso deste site está sujeito aos <a href="">Termos de uso</a> e <a href="">Política de privacidade</a>.</label>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
