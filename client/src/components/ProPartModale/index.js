import React from 'react';
import * as bs from "react-bootstrap";
import './style.scss';


const ProPartModal = () => {

    return (
        <div className="formulaire">
        
        
        <bs.Modal.Dialog>
          <bs.Modal.Header closeButton>
            <bs.Modal.Title>Inscription</bs.Modal.Title>
          </bs.Modal.Header>
        
          <bs.Modal.Body>
            <p>Vous vous inscrivez en tant que</p>
          </bs.Modal.Body>
        
          <bs.Modal.Footer>
            <bs.Button  href="http://localhost:3000/FormInscriptionPro" variant="danger" >Professionnel</bs.Button>
            <bs.Button  href="http://localhost:3000/FormInscriptionPart" variant="primary">Particulier</bs.Button>
          </bs.Modal.Footer>
        </bs.Modal.Dialog>
          </div>
        
        );


};


export default ProPartModal;