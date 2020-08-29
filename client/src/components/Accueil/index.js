import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';





const Accueil = (
  isLogged,
  loggedMessage
) => {
 
    return(
   
  
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">

    <div className="navbar-start">
      <Link className="navbar-item" id="navlink-items" to="/">
        Home
      </Link>

      <Link className="navbar-item" id="navlink-items" to="/contact">
        Contact
      </Link>

      

      <div className="navbar-item has-dropdown is-hoverable ">
      <a  id="navlink-items" className={isLogged ? "navbar-link" : "display:none"} >
          Documentations
        </a>

        <div className="navbar-dropdown">
        <Link className="navbar-item" id="navlink-items" to="/devis">
            Demande de devis
          </Link>
          <Link className="navbar-item" id="navlink-items" to="/docs">
            Telechargement
          </Link>
          
         </div>
      </div>
    </div>

    <div className="navbar-end">

    <div className="navbar-item">
        <div className="buttons" >
        <Link className="button is-primary" to="/ipro">
            <strong>S'inscrire</strong>
            </Link>          
            </div>
</div>
      
      <div className="navbar-item"> 
        <div className="buttons" >
        <Link className="button is-link" to="/connection">
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