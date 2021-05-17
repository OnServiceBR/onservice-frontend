import React, { Component } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Logo - Branco.png"

export default class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      click: false,
    }
  }

  handleClick = () => this.setState({click: !this.state.click});
  closeMobileMenu = () => this.setState({click: false});

  render(){
    return(
      <div class="header">
        <div class="header-container">
          <a href="/" class="brand-logo">
            <img src={logo} width="250" alt="logo"/>
          </a>
          <div class="menu-items">
            <a href="/">HOME</a>
            <a href="/contrate">CONTRATE UM PRESTADOR</a>
            <a href="/anuncie">ANUNCIE SEU TRABALHO</a>
            <a href="/contato">CONTATO</a>
          </div>
          <div class="right-buttons-navbar">
            <div class="buttons-navbar">
              <a id="help-navbar">?</a>
            </div>
            <div class="buttons-navbar">
              <a id="entrar-navbar">Entrar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
