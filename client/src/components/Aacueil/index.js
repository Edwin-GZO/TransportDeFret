import React from 'react';
import './style.scss';
import logo from '../../assets/images/IMG_2009.png'
import mar from '../../assets/images/mar.png'

const Aacueil = () => {
return (
    
    <div>
        <div className="acc">
      
      
        <img style={{height:200, width:200}} src={logo} />
        
       <p className="textAcc"> <h2 className="h2Acc">Bienvenue chez TDR </h2><p className="backAcc">La réactivité d'une PME, l'experience d'un réseau  </p> 
       </p>
      
   </div>
   </div>
)
}


export default Aacueil;