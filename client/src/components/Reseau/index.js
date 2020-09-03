import React from 'react';
import './style.scss';
import vector from '../../assets/images/vector.jpg';

const Reseau = () => {
return (
  <div className='fullPage-component'>

  <div className="split leftRes">
    
       <img className="imgRes" style={{width:700,height:700}} src={vector} alt="hey1"/>
    
    </div>
  
    <div className="split rightRes">
    <div className="textRes">
        <h2 className="h2Res">Réseau</h2>
      <p className="pRes">De 1 palette à 6 palettes, nous vous garantissons une distribution nationale de qualité grâce à notre intégration au groupement Evolutrans</p>
      </div>
    </div>
  
  
  </div>
)

}


export default Reseau;