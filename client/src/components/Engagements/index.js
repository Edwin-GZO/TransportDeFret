import React from "react";
import "./style.scss";

import { List, Header } from "semantic-ui-react";

const Engagements = () => (
  <section className="engagements">
    <h1 className="engagements-title" >
      NOS ENGAGEMENTS
    </h1>

    <div className="engagements-paragraphe">
      <List>

        <List.Item>Interlocuteur unique à promximité</List.Item>
        <List.Item>Délais garantis (24, 48, 72h)</List.Item>
        <List.Item>Qualité de service irréprochable et contrôlée</List.Item>
        <List.Item>Traçabilité en temps réél</List.Item>
        <List.Item>Accès privé à vos preuves de livraison en ligne dès le lendemain</List.Item>
        <List.Item>Une réduction de l'empreint environnementale grâce à l'optimisation des taux de remplissage des tractions</List.Item>
        <List.Item>Livraison sur rendez-vous</List.Item>
        
      </List>
    </div>
  </section>
);

export default Engagements;
