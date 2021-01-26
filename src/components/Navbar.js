import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Logo - Branco.png"
import { ReactComponent as CloseMenu } from "../assets/heroicons-0.4.2/src/solid/x.svg";
import { ReactComponent as MenuIcon } from "../assets/heroicons-0.4.2/src/solid/menu.svg";

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
            <img src={logo} width="250" />
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
