import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/home.css";
import Claudia from '../assets/Claudia-Fundo-Laranja.png';
import WhiteLeft from '../assets/BrancoEsquerda.png';
import WhiteRight from '../assets/BrancoDireita.png';
import Pessoa from '../assets/PessoaX.png';
import { FaMousePointer, FaSearch } from 'react-icons/fa';

import Carousel from "../components/Carousel.js";
import Card from '../components/Card.js';
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.cards = [
      { name: "José", job: "Pedreiro", picture: "../assets/Pessoa1.png" },
      { name: "Paulonilson", job: "Organizador de festas infantis", picture: "../assets/Pessoa2.png" },
      { name: "Maria", job: "Cantora", picture: "../assets/Pessoa3.png" },
      { name: "Antonio", job: "Cozinheiro", picture: "../assets/Pessoa4.png" },
      { name: "Carlos", job: "Segurança", picture: "../assets/Pessoa5.png" },
      { name: "Vanessa", job: "DJ", picture: "../assets/Pessoa6.png" },
      { name: "Henrique", job: "Massagista", picture: "../assets/Pessoa7.png" },
      { name: "Paulo", job: "Motoboy", picture: "../assets/Pessoa8.png" },
      { name: "Raissa", job: "Fotógrafa", picture: "../assets/Pessoa9.png" },
      { name: "Juliana", job: "Tradutora", picture: "../assets/Pessoa10.png" },
      { name: "Fabiano", job: "Fisioterapeuta", picture: "../assets/Pessoa11.png" },
      { name: "Bruna", job: "Cabelereira", picture: "../assets/Pessoa12.png" },
      { name: "Otávio", job: "Pintor", picture: "../assets/Pessoa13.png" },
      { name: "Rodolgo", job: "Professor", picture: "../assets/Pessoa14.png" },
    ];
  }
  render() {
    const cards = this.cards;

    return (
      <div>
        <div class="homephrase">
          <label class="h1-home">Nunca foi tão fácil <span style={{ color: "rgb(237,125,49)" }}>contratar</span> alguém!</label>
        </div>
        <div class="homephrase">
          <label class="h2-home">Procure um profissional para sua necessidade</label>
        </div>
        <div class="homephrase">
          <form method="get" action="/contrate">
            <button id="button1-search-home" type="submit">
              {/* Icone de busca */}
  					&nbsp; &nbsp; Buscar por um profissional
            <FaSearch id="search-lupe" />
            </button>
            <button id="button2-search-home" type="submit">
              Buscar
  				  </button>
          </form>
        </div>
        <p class="carousel-title">DESTAQUES DO MÊS</p>
        <Carousel
          show={5}
          infiniteLoop={true}
        >
          {cards.map(item =>
            <Card
              Job={item.job}
              Name={item.name}
              Picture={item.picture}
            />
          )}
        </Carousel>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-5">
            <div id="text-claudia">
              <div id="text-h3-home">
                <p><span style={{ color: "rgb(237,125,49)" }}>Cadastra-se</span> já e<br />
              receba <span style={{ color: "rgb(237,125,49)" }}>novos clientes</span>!</p>
              </div>
              <div id="text-h4-home">
                <p>Impulsione o seu negócio.<br />
              A OnService divulga o seu perfil para<br />
              milhares de clientes. E o melhor, é <span style={{ color: "rgb(237,125,49)" }}>grátis</span>!</p>
              </div>
              <form method="get" action="/anuncie">
                <button id="button3-register-home">
                  Cadastre-se na OnService Grátis
                <FaMousePointer id="mouse-pointer" />
                </button>
              </form>
            </div>
          </div>
          <div class="col-7">
            <img id="claudia" src={Claudia} width="500px" alt="Home" />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    )
  }
}
