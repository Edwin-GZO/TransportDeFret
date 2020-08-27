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

      <a class="navbar-item">
        Contact
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a Link class="navbar-item" exact to="/contact">
            Contact
          </a>
         </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons" >
        <Link class="button"  exact to="/connection">
            <strong>Se connecter</strong>
            </Link>
          <Link class="button is-primary" exact to="/inscription">
            S'inscrire
            </Link>
         
          
        </div>
      </div>
    </div>
  </div>
</nav>
 
   
    )
  }
  



export default Accueil;