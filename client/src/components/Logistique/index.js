import React from 'react';

import './style.scss';
import schema from '../../assets/images/logistique.png';

const Logistique = () => {
return (
 
  <div>

<div className="split leftLog">
    <div className="textLog">
      <h2 className="h2Log">Logistique</h2>
    <p className="pLog"> Evolupal offre une couverture internationale dans toute l’Europe. Qu’il s’agisse d’assurer une livraison en métropole ou dans un point de livraison plus reculé, ses transporteurs interviennent partout, tout en assurant une optimisation des délais de livraison</p>
    </div>
    
  
  </div>
  <div className="split rightLog">
     <img className="imgLog"  style={{width:700,height:1000}} src={schema} alt="hey1"/>
  </div>


</div> 
)

}


export default Logistique;