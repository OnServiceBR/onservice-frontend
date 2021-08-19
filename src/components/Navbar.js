import React, { Component } from "react";
import "../styles/Navbar(1).css";
import { AiOutlineMenu } from 'react-icons/ai'
import logo from "../assets/Logo - Branco.png"

// const NavBar = () => {
//   return (
//     <div class="header">
//       <div class="header-container">
//         <nav class="navbar navbar-expand-lg bg-nav">
//           <a class="brand-logo" href="/">
//             <img src={logo} width="150" alt="logo"/>
//           </a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <AiOutlineMenu />
//           </button>
//
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mr-auto justify-content-center">
//               <li class="nav-item active">
//                 <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/contrate">CONTRATE UM PROFISSIONAL</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/anuncie">ANUNCIE SEU TRABALHO</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/contato">CONTATO</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   )
// }

const NavBar = () => {
  return (
    <div class="header">
      <nav class="navbar navbar-expand-lg bg-nav">
        <a class="brand-logo" href="/">
          <img src={logo} width="150" alt="logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <AiOutlineMenu />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contrate">CONTRATE UM PROFISSIONAL</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/anuncie">ANUNCIE SEU TRABALHO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contato">CONTATO</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
