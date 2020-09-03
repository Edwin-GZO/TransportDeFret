import React from 'react';
import './style.scss';

import hyper from '../../assets/images/hyper.png';
const Distribution = () => {
return (
  <div className='fullPage-component'>
  
    <div className="split leftAff">
    <img className="imgDist" style={{width:700,height:1000}} src={hyper} alt="hey1"/>

      </div>
    
      <div className="split rightAff">
      <div className="textDist">
        <h2 className="h2Dist">Distribution</h2>
        <p className="pDist">Oubliez les embouteillages et les conteaintes d'accès, confiez nous vos derniers kilomètres.</p>
      </div>
    </div>

    
  </div>
 ) };

export default Distribution;
 

