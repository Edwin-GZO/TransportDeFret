


import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Accueil from '../../components/Accueil';
import FormQuotePro from '../../containers//FormQuotePro';
import PageContact from '../../components/PageContact';
import FormInscriptionPro from '../../containers/FormInscriptionPro';
import FormInscriptionPart from '../../containers/FormInscriptionPart';
import LoginForm from '../../containers/LoginForm';
import ContactForm from '../../containers/ContactForm';

import { checkAuth } from '../../store/action/user-actions';

import './style.scss';



function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(checkAuth());
  }, [])

  return (
    <div className="App">
    
      <Switch>
        <Route path="/contact" component={PageContact} />
        <Route path="/" component={Accueil} />
        <Route path="/connection" component={LoginForm} />
      </Switch>
      
    </div>
  );
}

export default App;
