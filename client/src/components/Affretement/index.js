import React from 'react';
import './style.scss'
import schema from '../../assets/images/logistique.png'
import panne from '../../assets/images/panne.png'

const Affretement = () => {
return (
  <div>

<div className="split leftAff">
  
     <img className="imgAff" style={{width:600,height:600}} src={panne} alt="hey1"/>
  
  </div>

  <div className="split rightAff">
  <div className="textAff">
      <h2 className="h2Aff">Affretement</h2>
    <p className="pAff">L'experience et le réseau de 7 affréteurs permettent de vous proposer des solutions techniquement adaptées à des prix compétitifs.
   </p>
    </div>
  </div>


</div>
)
}


export default Affretement;