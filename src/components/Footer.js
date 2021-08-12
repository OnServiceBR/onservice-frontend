import React, { Component } from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
                <label class="footer-content"><a href="/seguranca">Dicas de segurança</a></label><br />
              </div>
              <div class="col">
                <label class="footer-title">OnService</label><br />
                <label class="footer-content"><a href="/sobre-nos">Sobre a OnService</a></label><br />
                <label class="footer-content"><a href="/contato">Fale conosco</a></label><br />
                <label class="footer-content"><a href= "/anunciantes">Divulgue sua marca</a></label><br />
              </div>
              <div class="col">
                <label class="footer-title-2">Confira</label>
                <ul class="social">
                  <li><a href="https://www.facebook.com/OnServiceOficial"><FaFacebook color='white' size='1.8em'/></a></li>
                  <li><a href="https://www.instagram.com/onserviceoficial/"><FaInstagram color='white' size='1.8em'/></a></li>
                  <li><a href="https://www.linkedin.com/company/onserviceoficial"> <FaLinkedin color='white' size='1.8em'/></a></li>
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
