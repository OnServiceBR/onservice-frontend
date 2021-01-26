import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from '../assets/Logo - Laranja.png';
import bonecoHome from '../assets/boneco_home.png';
import bonecoOlhando from '../assets/undraw_guy_looking.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return(
		<div>
			<div class="homephrase">
				<label class="h1-home">Nunca foi tão fácil <span style={{color:"rgb(237,125,49)"}}>contratar</span> alguém!</label>
			</div>
			<div class="homephrase">
				<label class="h2-home">Procure um profissional para sua necessidade</label>
			</div>
			<div class="homephrase">
				<form method="get" action="/contrate">
				<button id="button1-search-home" type="submit">
						<FontAwesomeIcon icon={['fas', 'search']} size="lg" color="rgb(237,125,49)"/>
						&nbsp; &nbsp; Buscar por um profissional
				</button>
				<button id="button2-search-home" type="submit">	
					 
						Buscar
				</button>
				</form>
			</div>
		</div>
    )
  }
}
