import React from 'react';

import './style.scss';
import schema from '../../assets/images/logistique.png';

const Logistique = () => {
return (
 
  <div>

<div className="split leftLog">
    <div className="textLog">
      <h2 className="h2Log">Logistique</h2>
    <p className="pLog">Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
    </div>
    
  
  </div>
  <div className="split rightLog">
     <img className="imgLog"  style={{width:700,height:1000}} src={schema} alt="hey1"/>
  </div>


</div> 
)

}


export default Logistique;