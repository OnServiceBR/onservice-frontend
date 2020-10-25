import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="" alt="OnService" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/contrate"} className="nav-link">
                Contrate um prestador
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/anuncie"} className="nav-link">
                Anuncie seu trabalho
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/contato"} className="nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
