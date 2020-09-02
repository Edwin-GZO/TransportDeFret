import React from 'react';
import './style.scss';
import schema from '../../assets/images/logistique.png';

const Distribution = () => {
return (
  <section className="log">
  
<div>

<div className="split leftDist">
    <div className="textDist">
      <h2 className="h2Dist">Distribution</h2>
    <p className="pDist">Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
    </div>
    
  
  </div>
  <div className="split rightDist">
     <img className="imgDist" style={{width:700,height:1000}} src={schema} alt="hey1"/>
  </div>


</div>
</section>
  
 

)

}


export default Distribution;