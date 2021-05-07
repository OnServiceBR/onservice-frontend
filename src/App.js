import React from 'react';
import { Switch, Route } from "react-router-dom";

import './styles/fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home.page";
import Contrate from "./pages/contrate.page";
import Anuncie from "./pages/anuncie.page";
import Contato from "./pages/contato.page";
import Conduta from "./pages/conduta.page";
import Termos from "./pages/termos.page";
import Privacidade from "./pages/privacidade.page";
import Perfil from "./pages/perfil.page";
import Profissionais from "./pages/profissionais.page";
import Manutencao from "./pages/trabalhos/Manutencao";
import Beleza from "./pages/trabalhos/Beleza";
import Ensino from "./pages/trabalhos/Ensino";
import Eventos from "./pages/trabalhos/Eventos";
import Outros from "./pages/trabalhos/Outros";
import Residencial from "./pages/trabalhos/Residencial";
import Saude from "./pages/trabalhos/Saude";
import Tecnologia from "./pages/trabalhos/Tecnologia";

function App() {
  return (
    <div>
      <Navbar />
      <div class="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ED7D31" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,48C672,53,768,43,864,37.3C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container-fluid mt-3 px-0">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contrate" component={Contrate} />
          <Route exact path="/anuncie" component={Anuncie} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/contrate/:job/:workers" component={Profissionais} />
          <Route exact path="/codigo-de-conduta/" component={Conduta} />
          <Route exact path="/perfil/" component={Perfil} />
          <Route exact path="/termos-de-uso/" component={Termos} />
          <Route exact path="/politica-de-privacidade/" component={Privacidade} />
          <Route exact path="/contrate/beleza" component={Beleza} />
          <Route exact path="/contrate/ensino" component={Ensino} />
          <Route exact path="/contrate/eventos" component={Eventos} />
          <Route exact path="/contrate/manutencao" component={Manutencao} />
          <Route exact path="/contrate/outros" component={Outros} />
          <Route exact path="/contrate/residencial" component={Residencial} />
          <Route exact path="/contrate/saude" component={Saude} />
          <Route exact path="/contrate/tecnologia" component={Tecnologia} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
