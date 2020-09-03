import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';


import Carte from '../../components/Carte';
import Distribution from '../../components/Distribution';

import Logistique from '../../components/Logistique';
import Mots from '../../components/Mots';
import PageContact from '../../components/PageContact';

import Reseau from '../../components/Reseau';
/*import ReactFullpage from '@fullpage/react-fullpage';
import {SectionsContainer, Section} from 'react-fullpage';*/

import { checkAuth } from '../../store/action/user-actions';


import Affretement from "../../components/Affretement";
import Aacueil from "../../components/Aacueil";



function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(checkAuth());
  }, []);

  return (

   <div className="App">
      <Aacueil /> 
    </div>
  );
}

// <Affretement />
//       <Carte />
//       <Distribution />
//       <Logistique />
//       <Mots />
//       <PageContact />
//       <Reseau/>

export default App;



// <div className="App">
// <Switch>
//     <Route exact path='/' component={Aacueil} />
//     <Route exact path="/affretement" component={Affretement} />
//     <Route exact path="/carte" component={Carte} />
//     <Route exact path="/distribution" component={Distribution} />  
//     <Route exact path="/logistique" component={Logistique} />
//     <Route exact path="/Mots" component={Mots} />
//     <Route exact path="/pageContact" component={PageContact} />
//     <Route exact path="/reseau" component={Reseau} />
//  </Switch> 
// </div>