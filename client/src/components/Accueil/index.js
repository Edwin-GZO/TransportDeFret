import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';





const Accueil = () => {
 
    return(
   
  
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link class="navbar-item" id="navlink-items" exact to="/">
        Home
      </Link>

      <Link class="navbar-item" id="navlink-items" exact to="/contact">
        Contact
      </Link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          S'inscrire
        </a>

        <div class="navbar-dropdown">
        <Link class="navbar-item" id="navlink-items" exact to="/ipro">
            Je suis un professionnel
          </Link>
          <Link class="navbar-item" id="navlink-items" exact to="/ipart">
            Je suis un particulier
          </Link>
          
         </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons" >
        <Link class="button is-primary" exact to="/connection">
            <strong>Se connecter</strong>
            </Link>
          
            
         
          
        </div>
      </div>
    </div>
  </div>
  </nav>

 
   
    )
  }
  



export default Accueil;