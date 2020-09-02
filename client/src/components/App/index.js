


import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import Accueil from '../../containers/Accueil';
import FormQuotePro from '../../containers//FormQuotePro';
import PageContact from '../../components/PageContact';
import FormInscriptionPro from '../../containers/FormInscriptionPro';
import FormInscriptionPart from '../../containers/FormInscriptionPart';
import LoginForm from '../../containers/LoginForm';
import ContactForm from '../../containers/ContactForm';
import ModalInscription from '../../components/ModalInscription';
import NotFound from '../../components/NotFound';

import Reseau from '../../components/Reseau';


import { checkAuth } from '../../store/action/user-actions';

import './style.scss';



const App = (
  isLogged
) => {
console.log(isLogged);
  
  const dispatch = useDispatch();
  useEffect(()=> {
   dispatch(checkAuth());
 }, [])

  return (
    <div className="App">


    
      <Switch>   
        <Route exact path="/" component={Accueil} />   
        <Route  path="/contact" component={ContactForm} />
        <Route  path="/connection" component={LoginForm} />

        {/*require login*/}

        {isLogged && (<Route  path="/ipro" component={FormInscriptionPro} />)}
        {isLogged && (<Route  path="/ipart" component={FormInscriptionPart} />)}
        {isLogged && (<Route  path="/devis" component={FormQuotePro} />)}
        
               
        <Route>
            <NotFound />
        </Route>
      </Switch>
     
      
    </div>
  );
}

export default App;
