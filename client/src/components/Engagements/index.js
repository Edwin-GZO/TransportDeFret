import React from "react";
import "./style.scss";

import { List, Icon } from "semantic-ui-react";

const Engagements = () => (
  <section className="engagements">
    <h1 className="engagements-title" >
      NOS ENGAGEMENTS
    </h1>

    <div className="engagements-paragraphe">
      <List>
     
        <List.Item><Icon name="assistive listening systems"/> Interlocuteur unique à promximité</List.Item>
        
        
        <List.Item><Icon name="hourglass half"/> Délais garantis (24, 48, 72h)</List.Item>
       
        
        <List.Item><Icon name="thumbs up outline"/> Qualité de service irréprochable et contrôlée</List.Item>
       
        
        <List.Item><Icon name="edit outline"/> Traçabilité en temps réél</List.Item>
      
       
        <List.Item><Icon name="clipboard check"/> Accès privé à vos preuves de livraison en ligne dès le lendemain</List.Item>
       
        <List.Item><Icon name="leaf"/> Une réduction de l'empreint environnementale grâce à l'optimisation des taux de remplissage des tractions</List.Item>
       
       
        <List.Item><Icon name="shipping fast"/> Livraison sur rendez-vous</List.Item>
       
        
      </List>
    </div>
  </section>
);

export default Engagements;
