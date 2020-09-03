import React from 'react';
import './style.scss';
import logo from '../../assets/images/IMG_2009.png';
import Carte from '../../components/Carte';
import Affretement from '../../components/Affretement';
import Distribution from '../../components/Distribution';
import Logistique from '../../components/Logistique';
import Mots from '../../components/Mots';
import Reseau from '../../components/Reseau';
import PageContact from '../../components/PageContact';
const Aacueil = () => {
return ( 
    <div>
        <div className="acc fullPage-component">
      
      
       
        
       <p className="textAcc active"> <h2 className="h2Acc">Bienvenue chez TDR </h2><p className="backAcc">La réactivité d'une PME, l'experience d'un réseau  </p> 
       </p>
       

      
   </div>
   <Mots />
   <Affretement />
      <Carte />
      <Distribution />
      <Logistique />
     
      <Reseau/>
      <PageContact />
   </div>
)
}


export default Aacueil;