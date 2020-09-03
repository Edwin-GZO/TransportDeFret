import React from 'react';
import './style.scss';
import CarteFrance from '../../assets/images/CarteFrance.png';

const Carte = () => {
return (
  <div className='fullPage-component'>

    <div className="split leftCarte">
      
         <img className="imgCarte" style={{width:600,height:600}} src={CarteFrance} alt="hey1"/>
      
      </div>
    
      <div className="split rightCarte">
      <div className="textCarte">
          <h2 className="h2Carte">Carte</h2>
        <p className="pCarte">De 1 palette à 6 palettes, nous vous garantissons une distribution nationale de qualité grâce à notre intégration au groupement Evolutrans. </p>
        </div>
      </div>
    
    
    </div>
)

}


export default Carte;