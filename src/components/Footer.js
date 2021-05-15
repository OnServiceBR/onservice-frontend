import React, { Component } from "react";
import "../styles/footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render(){
    return(
      <div>
        <footer>
          <div class="footer-container">
            <div class="row row-size">
              <div class="col">
                <label class="footer-title">Informações</label><br />
                <label class="footer-content"><a>Como utilizar o site</a></label><br />
                <label class="footer-content"><a>Como utilizar o app</a></label><br />
                <label class="footer-content"><a>Dicas de segurança</a></label><br />
              </div>
              <div class="col">
                <label class="footer-title">OnService</label><br />
                <label class="footer-content"><a>Sobre a OnService</a></label><br />
                <label class="footer-content"><a href="/contato">Fale conosco</a></label><br />
                <label class="footer-content"><a href= "anuncie">Anuncie com a gente</a></label><br />
              </div>
              <div class="col">
                <label class="footer-title-2">Confira</label>
                <ul class="social">
                  <li><a href="https://www.facebook.com/OnServiceOficial"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" color="white"/></a></li>
                  <li><a href="https://www.instagram.com/onserviceoficial/"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" color="white"/></a></li>
                  <li><a href="https://www.linkedin.com/company/onserviceoficial"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color="white"/></a></li>
                </ul>
              </div>
            </div>
            <hr />
            <div class="socket">
              O uso deste site está sujeito aos <a href="/termos-de-uso">Termos de uso</a> e <a href="/politica-de-privacidade">Política de privacidade</a>.<br></br>
              ®OnService - Todos os direitos reservados.<br></br>
              <span style={{textDecoration: "underline white"}}>onservicesac@gmail.com</span>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
