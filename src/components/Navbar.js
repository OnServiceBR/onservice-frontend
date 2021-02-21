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
          <div class="brand-logo">
            <img src={logo} width="250" alt="logo"/>
          </div>
          <div class="menu-items">
            <a href="/">HOME</a>
            <a href="/contrate">CONTRATE UM PRESTADOR</a>
            <a href="/anuncie">ANUNCIE SEU TRABALHO</a>
            <a href="/contato">CONTATO</a>
          </div>
        </div>
      </div>
    )
  }
}
