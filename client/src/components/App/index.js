import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Accueil from '../../components/Accueil';

import Carte from '../../components/Carte';
import Distribution from '../../components/Distribution';
import FormQuotePro from '../../containers//FormQuotePro';
import Logistique from '../../components/Logistique';
import Mots from '../../components/Mots';
import Oui from '../../components/Oui';
import PageContact from '../../components/PageContact';
import ProPartModale from '../../components/ProPartModale';
import Reseau from '../../components/Reseau';
import FormInscriptionPro from '../../containers/FormInscriptionPro';
import FormInscriptionPart from '../../containers/FormInscriptionPart';
import LoginForm from '../../containers/LoginForm';
import ContactForm from '../../containers/ContactForm';
import Testtemplate from '../../components/Testtemplate';
import ReactFullpage from '@fullpage/react-fullpage';
import {SectionsContainer, Section} from 'react-fullpage';

import { checkAuth } from '../../store/action/user-actions';


import Affretement from "../../components/Affretement";
import Aacueil from "../../components/Aacueil";




function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(checkAuth());
  }, [])

  return (
    <div className="App">
 


<PageContact />





     {/*} <Switch>
        <Route path="/affretement" component={Affretement} />
        <Route path="/carte" component={Carte} />
        <Route path="/distribution" component={Distribution} />
        
        <Route path="/logistique" component={Logistique} />
        <Route path="/Mots" component={Mots} />
        <Route path="/pageContact" component={PageContact} />
        <Route path="/ProPartModale" component={ProPartModale} />
        <Route path="/reseau" component={Reseau} />
</Switch>*/}
      
    </div>
  );
}

export default App;
