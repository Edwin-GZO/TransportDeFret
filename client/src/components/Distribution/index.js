import React from 'react';
import './style.scss';
import schema from '../../assets/images/logistique.png';
import hyper from '../../assets/images/hyper.png';
const Distribution = () => {
return (
  <section className="log">
  
<div>

<div className="split leftDist">
    <div className="textDist">
      <h2 className="h2Dist">Distribution</h2>
    <p className="pDist">Oubliez les embouteillages et les conteaintes d'accès, confiez nous vos derniers kilomètres.</p>
    </div>
    
  
  </div>
  <div className="split rightDist">
     <img className="imgDist" style={{width:700,height:1000}} src={hyper} alt="hey1"/>
  </div>


</div>
</section>
  
 

)

}


export default Distribution;