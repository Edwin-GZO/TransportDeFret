import React from 'react';
import './style.scss';
import * as ReactBootStrap from "react-bootstrap";




const Accueil = () => {
 
    return(
   
    
    <div className="App" >
  <div className="container">
      
      <ReactBootStrap.Navbar className="fw" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Logo Entreprise que j'arrive pas à integrer</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#accueil">Accueil</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#reseau">Réseau</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#livraison">Livraison</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#affretement">Affretement</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#logistique">Logistique</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#entreprise">Entreprise</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#carte">Carte</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#inscription">Inscription</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>
      
      {/*<ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>*/}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#inscrire">s'incrire</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#connection">
        se connecter
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
</div>

{/*
<div className="carousel">

<ReactBootStrap.Carousel interval={3000} >
  <ReactBootStrap.Carousel.Item>
    <img
      className="imgCar"
      src="https://www.cocoexpress.fr/view/images/icon/256/transport-express-colis-france.png"
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="imgCar"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <ReactBootStrap.Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="imgCar"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <ReactBootStrap.Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>
</div>*/}

     </div>
    )
  }
  



export default Accueil;