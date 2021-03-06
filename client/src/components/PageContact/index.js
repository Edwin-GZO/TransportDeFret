import React from 'react';
import { Header } from 'semantic-ui-react'
import './style.scss';
import logo from '../../assets/images/IMG_2009.png'

const PageContact = () => {
return (
    <div className='fullPage-component'>
<div className="container">

<img className="contImg" src={logo} style={{height:400, width:400}} />

<div className="allBlock">

    
  <div className="block_address">
<Header size='large' color='red' className="subtitle"><a href="https://www.google.fr/maps/place/1+Impasse+de+la+Gr%C3%A8ce,+13127+Vitrolles/@43.4175812,5.2681815,17z/data=!3m1!4b1!4m5!3m4!1s0x12c9e91e4dfc82ff:0x52c30d921e7a3be!8m2!3d43.4175812!4d5.2703702" target="_blank" rel="noopener noreferrer">VITROLLES</a></Header>
<p>Zac l'Anjoly </p>
<p>1 impasse de Grèce</p>
<p> 13127 VITROLLES </p>
<p>Tel: 04.42.34.63.40</p>
   </div> 


   <div className="block_address">
    <Header size='large' color='red' className="subtitle"><a href="https://www.google.fr/maps/place/Transports+TDR/@43.790406,7.2067323,17z/data=!3m1!4b1!4m5!3m4!1s0x12cdcecd00be3d15:0xd16976c3d786a3fd!8m2!3d43.790406!4d7.208921" target="_blank" rel="noopener noreferrer">NICE</a></Header>
    <p>ZI de Carros </p>
        <p>1ere avenue 10è rue BP 485 </p>
        <p>06515 CARROS Cedex</p>
    <p>Tel: 04.92.02.00.66</p>
   </div> 

  
   <div className="block_address">
<Header size='large' color='red' className="subtitle"><a href="https://www.google.fr/maps/place/25+Rue+du+Mollaret,+38070+Saint-Quentin-Fallavier/@45.6482503,5.1022949,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4ce0f535ab623:0xb8759d1466b93cf3!8m2!3d45.6482503!4d5.1044836" target="_blank" rel="noopener noreferrer">GRENOBLE</a></Header>
    <p>Chez Exo fret </p>
        <p>25 rue du Mollaret </p>
        <p>38070 St Quentin Fallavier</p>
    <p>Tel: 06.20.90.40.33</p>
   </div>
   </div>

   </div>

   </div>


  
   
    
)

}

export default PageContact;