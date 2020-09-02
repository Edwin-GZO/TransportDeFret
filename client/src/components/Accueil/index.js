import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import './style.scss';





const Accueil = (
  { handleLogout,
    isLogged }
) => {

  const [open, setOpen] = React.useState(false)
 
console.log(isLogged);
  //const [isLogged, setislogged] = useState(false);
 
  
    
    return(
   
  

      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">

    <div className="navbar-start">
      <Link className="navbar-item" id="navlink-items" to="/">
        Accueil
      </Link>

      <Link className="navbar-item" id="navlink-items" to="/contact">
        Contact
      </Link>

      {!isLogged && (

        
      <div className="navbar-item"> 
        <div className="buttons" >
        <span>
        <Link className="button is-primary" to="/connection">
            <strong>Se connecter</strong>
            </Link>  
            </span>        
      </div>
      </div> 
      )}   

      <a href='#' id="navlink-items" className={(isLogged ? "navbar-item" : "display")}>
        Mes info
      </a>

      <div className="navbar-item has-dropdown is-hoverable">

      <a  id="navlink-items" className={(isLogged ? "navbar-link" : "display")}>
          Documentations
        </a>

        <div className="navbar-dropdown">
        <Link className="navbar-item" id="navlink-items" to="/devis">
            Demande de devis
          </Link>
          <Link className="navbar-item" id="navlink-items" to="/docs">
            Telechargement
          </Link>
          
         </div>
      </div>
    </div>

    
    <div className="navbar-end">

    
        {!isLogged

        ? 
        <>
        
      
        <div className="navbar-item">
        <div className="buttons" >         
        <Modal className="modal-btn"
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='tiny'
      trigger={<Button primary>S'inscrire</Button>}
    >
     <section className="modale">
      <Modal.Content>
        <Header as='h2' color='blue'>
          Vous désirez vous inscrire en tant que :
        </Header>
      </Modal.Content>
      <Modal.Actions>
      <span id="devispro">
        <Link color='white' to="ipro">
          <Icon name='checkmark' /> Professionnel
        </Link>
       </span>
       <span id="devispart">
        <Link  color='white' to="ipart">
          <Icon name='checkmark' /> Particulier
        </Link>
        </span>
               
      </Modal.Actions>
      </section>
    </Modal>
            </div>
        </div>

       
  </>

        :  
        
        <div className="navbar-item"> 
        <div className="buttons" >
        <button type="button" className="button is-danger" onClick={handleLogout}>
            <strong>Déconnexion</strong>
            </button>          
      </div>
      </div>           
        

        }
        
      
      
        
      </div>
      </div>
      
   
 
  </nav>

 
   
    )
  }
  



export default Accueil;