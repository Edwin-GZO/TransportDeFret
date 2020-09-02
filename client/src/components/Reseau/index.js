import React from 'react';
import './style.scss';
import schema from '../../assets/images/logistique.png';

const Reseau = () => {
return (
  <div>

  <div className="split leftRes">
    
       <img className="imgRes" style={{width:700,height:1000}} src={schema} alt="hey1"/>
    
    </div>
  
    <div className="split rightRes">
    <div className="textRes">
        <h2 className="h2Res">Réseau</h2>
      <p className="pRes">Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
      </div>
    </div>
  
  
  </div>
)

}


export default Reseau;