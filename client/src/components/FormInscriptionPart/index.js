import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './style.scss';
import PropTypes from "prop-types";

const FormInscriptionPart = () => {

    return (
     <section className="formulaire">
<h1 className="title">Formulaire d'inscription</h1>

        <ReactBootStrap.Form >
<ReactBootStrap.Form.Row>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridEmail">
      <ReactBootStrap.Form.Label>Nom</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="name" placeholder="" />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridPassword">
      <ReactBootStrap.Form.Label>Prenom</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="text" placeholder="" />
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form.Row>
  <ReactBootStrap.Form.Row>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridEmail">
      <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="email" placeholder="" />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridPassword">
      <ReactBootStrap.Form.Label>Mot de passe</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="password" placeholder="" />
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form.Row>
  <ReactBootStrap.Form.Group controlId="formGridAddress1">
    <ReactBootStrap.Form.Label>Adresse de facturation</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Form.Group controlId="formGridAddress2">
    <ReactBootStrap.Form.Label>Suite Adresse </ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Form.Row>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridCity">
      <ReactBootStrap.Form.Label>Ville</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridState">
      <ReactBootStrap.Form.Label>Pays</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control as="select" defaultValue="France">
        <option>France</option>
        <option>Espagne</option>
        <option>Pologne</option>
        <option>Italie</option>
        <option>Autriche</option>
        <option>...</option>
      </ReactBootStrap.Form.Control>
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridZip">
      <ReactBootStrap.Form.Label>Code postal</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control />
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form.Row>
  <ReactBootStrap.Button variant="danger" type="reset" >
    Annuler
  </ReactBootStrap.Button>
  <ReactBootStrap.Button variant="primary" type="submit"  >
    Valider
  </ReactBootStrap.Button>
 
</ReactBootStrap.Form>
</section>

    );
  
};

export default FormInscriptionPart;