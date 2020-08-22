


import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Accueil from '../../components/Accueil';
import Affretement from '../../components/Affretement';
import Carte from '../../components/Carte';
import Distribution from '../../components/Distribution';
import FormDevis from '../../components/FormDevis';
import Logistique from '../../components/Logistique';
import Mots from '../../components/Mots';
import PageContact from '../../components/PageContact';
import ProPartModale from '../../components/ProPartModale';
import Réseau from '../../components/Reseau';
import FormInscriptionPro from '../../containers/FormInscriptionPro';
import FormInscriptionPart from '../FormInscriptionPart';
import LoginForm from '../../containers/LoginForm';
import ContactForm from '../../components/ContactForm';

import './style.scss';



function App() {
  return (
    

    
     
   

    <div className="App">
     <ContactForm />
      <Switch>
      <Route path="/affretement" component={Affretement} />
    
      <Route path="/carte" component={Carte} />
    
      <Route path="/distribution" component={Distribution} />

      <Route path="/formDevis" component={FormDevis} />
    
      <Route path="/logistique" component={Logistique} />
  
      <Route path="/Mots" component={Mots} />
    
      <Route path="/pageContact" component={PageContact} />
    
      <Route path="/ProPartModale" component={ProPartModale} />
    
      <Route path="/reseau" component={Réseau} />
      </Switch>
     
  
    </div>

    
  );
}

export default App;
