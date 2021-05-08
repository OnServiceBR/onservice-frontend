import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/trabalhos.css";
import privada from "../../assets/Ícones/privada.png";

export default class Home extends Component {

  render() {
    return(
      <div>
        {/* O caminho aqui está só para Manutenção, tem que automatizar pra cada uma das categorias de serviços que estão nos botões */}
        <a class="path" href="/">Home</a><h2 class="path"> &gt; </h2><a class="path" href="/contrate">Contrate um serviço</a><h2 class="path"> &gt; </h2><h2 class="path-actual">Residencial</h2>
        <div class="search-box">
          <form method="get" action="/contrate">
            <div id="search-contrate">
              <FontAwesomeIcon icon={['fas', 'search']} size="lg" color="rgb(237,125,49)"/>
              <input id="search-input-contrate" placeholder="Buscar por um profissional"/>
            </div>
            <button id="search-button-contrate" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div class="search-tabs">
          <a href="javascript:history.back()">
            <label id="trabalhos-category-label"  class="link-bar-label">Categorias</label>
          </a>
          <label id="trabalhos-service-label">Serviços</label>
          <label id="trabalhos-job-label">Profissionais</label>
        </div>
        <div class="job-dictionary">
          |
          <a href="#names-A"> A </a>|
          <a href="#names-B"> B </a>|
          <a href="#names-C"> C </a>|
          <a href="#names-D"> D </a>|
          <a href="#names-E"> E </a>|
          <a href="#names-F"> F </a>|
          <a href="#names-G"> G </a>|
          <a href="#names-H"> H </a>|
          <a href="#names-I"> I </a>|
          <a href="#names-J"> J </a>|
          <a href="#names-K"> K </a>|
          <a href="#names-L"> L </a>|
          <a href="#names-M"> M </a>|
          <a href="#names-N"> N </a>|
          <a href="#names-O"> O </a>|
          <a href="#names-P"> P </a>|
          <a href="#names-Q"> Q </a>|
          <a href="#names-R"> R </a>|
          <a href="#names-S"> S </a>|
          <a href="#names-T"> T </a>|
          <a href="#names-U"> U </a>|
          <a href="#names-V"> V </a>|
          <a href="#names-W"> W </a>|
          <a href="#names-X"> X </a>|
          <a href="#names-Y"> Y </a>|
          <a href="#names-Z"> Z </a>|
        </div>
        <br/>
        <hr class="job-hr"/>
         <h1 class="job-dictionary-letter">A<a name="names-A"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">B<a name="names-B"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">C<a name="names-C"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">D<a name="names-D"></a></h1>
        <hr class="job-hr"/>
        <div class="job-link">
          {/* Final do link está manual */}
            <a href="/contrate/manutencao/encanador">
              <div class="row">
                <div class="column job-imagecontainer">
                  <button class="job-icon-button-class"> </button>
                </div>
                <div class="column job-textcontainer">
                  {/* Texto a ser escrito está manual, tanto título quanto quantidade de profissionais */}
                  <p class="job-name">Diarista</p>
                  <p class="job-workers-count">0 profissionais</p>
                </div>
              </div>
            </a>
          </div>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">E<a name="names-E"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">F<a name="names-F"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">G<a name="names-G"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">H<a name="names-H"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">I<a name="names-I"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">J<a name="names-J"></a></h1>
        <hr class="job-hr"/>
        <div class="job-link">
          {/* Final do link está manual */}
            <a href="/contrate/manutencao/encanador">
              <div class="row">
                <div class="column job-imagecontainer">
                  <button class="job-icon-button-class"> </button>
                </div>
                <div class="column job-textcontainer">
                  {/* Texto a ser escrito está manual, tanto título quanto quantidade de profissionais */}
                  <p class="job-name">Jardineiro(a)</p>
                  <p class="job-workers-count">1 profissionais</p>
                </div>
              </div>
            </a>
          </div>
          <h1 class="job-dictionary-letter">K<a name="names-K"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">L<a name="names-L"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">M<a name="names-M"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">N<a name="names-N"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">O<a name="names-O"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">P<a name="names-P"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">Q<a name="names-Q"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">R<a name="names-R"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">S<a name="names-S"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">T<a name="names-T"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">U<a name="names-U"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">V<a name="names-V"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">W<a name="names-W"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">X<a name="names-X"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">Y<a name="names-Y"></a></h1>
        <hr class="job-hr"/>
          <h1 class="job-dictionary-letter">Z<a name="names-Z"></a></h1>
        <hr class="job-hr"/>        
      </div>
    )
  }
}
