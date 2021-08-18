import React, { useEffect } from "react";
import "../styles/home.css";
import Claudia from '../assets/Claudia-Fundo-Laranja.png';
import { FaMousePointer, FaSearch } from 'react-icons/fa';

import Carousel from "../components/Carousel.js";
import Card from '../components/Card.js';
import Database from '../components/Database'
import Counter from "../components/Counter";

const Home = () => {

  const cards = [
    { name: "José", job: "Pedreiro", picture: "../assets/Pessoa1.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Paulonilson", job: "Organizador de festas infantis", picture: "../assets/Pessoa2.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Maria", job: "Cantora", picture: "../assets/Pessoa3.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Antonio", job: "Cozinheiro", picture: "../assets/Pessoa4.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Carlos", job: "Segurança", picture: "../assets/Pessoa5.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Vanessa", job: "DJ", picture: "../assets/Pessoa6.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Henrique", job: "Massagista", picture: "../assets/Pessoa7.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Paulo", job: "Motoboy", picture: "../assets/Pessoa8.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Raissa", job: "Fotógrafa", picture: "../assets/Pessoa9.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Juliana", job: "Tradutora", picture: "../assets/Pessoa10.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Fabiano", job: "Fisioterapeuta", picture: "../assets/Pessoa11.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Bruna", job: "Cabelereira", picture: "../assets/Pessoa12.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Otávio", job: "Pintor", picture: "../assets/Pessoa13.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
    { name: "Rodolgo", job: "Professor", picture: "../assets/Pessoa14.png", link: "/contrate/manutencao/pintor(a)/adilso-teixeira" },
  ];

  const totalCount = Database.length;

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
            <div>Buscar por um profissional</div>
            <FaSearch id="search-lupe" />
          </button>
          <button id="button2-search-home" type="submit">
            Buscar
          </button>
        </form>
      </div>

      <p class="total-counter"><span style={{ color: "rgb(237,125,49)", fontWeight: "bold", fontSize: "22pt" }}>{totalCount}</span> Profissionais cadastrados!</p>
      <div class="carrossel">
        <p class="carousel-title">DESTAQUES DO MÊS</p>
        <Carousel
        show={5}
        infiniteLoop={true}
        >
        {Database.filter((item) => {
          if (item.emphasize === true) return item;
        }).map(item =>
          <Card
          Job={item.jobsRight[0]}
          Name={item.name.split(" ", 1)[0]}
          Picture={item.picture}
          Link={item.link}
          />
        )}
        </Carousel>
      </div>
      <div class="claudia-flex">
        <div class="claudia-text-flex">
          <div id="text-h3-home">
            <p><span style={{ color: "rgb(237,125,49)" }}>Cadastra-se</span> já e<br />
              receba <span style={{ color: "rgb(237,125,49)" }}>novos clientes</span>!</p>
          </div>
          <div id="text-h4-home">
            <p>Impulsione o seu negócio.<br />
              A OnService divulga o seu perfil para<br />
              milhares de clientes. E o melhor, é <span style={{ color: "rgb(237,125,49)" }}>grátis</span>!</p>
          </div>
          <form class="orange-button-register-home" method="get" action="/anuncie">
            <button id="button3-register-home">
              Cadastre-se de Graça na OnService
              <FaMousePointer id="mouse-pointer" />
            </button>
          </form>
        </div>
        <div class="claudia-image-flex">
          <img id="claudia" src={Claudia} alt="Home" />
        </div>
      </div>
    </div>
  )
}

export default Home;
