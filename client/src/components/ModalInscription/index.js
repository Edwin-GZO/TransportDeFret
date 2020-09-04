import React from "react";
import { Link } from 'react-router-dom'
import "./style.scss";
import logo from '../../assets/images/IMG_2009.png'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalInscription() {
  const [open, setOpen] = React.useState(false)

  return (
    
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='tiny'
      trigger={<Button>Basic Modal</Button>}
    >
      
        
      <section className="modale">
      <Modal.Content>
        <Header as='h2' color='blue'>
          Vous désirez vous inscrire en tant que :
        </Header>
      </Modal.Content>
      <Modal.Actions>
      <span id="devispro">
        <Link color='white' exact to="ipro">
          <Icon name='checkmark' /> Professionnel
        </Link>
       </span>
       <span id="devispart">
        <Link  color='white' exact to="ipart">
          <Icon name='checkmark' /> Particulier
        </Link>
        </span>
        <span id="backhome">
        <Link  color='red' to="/">
          <Icon name='checkmark' /> Annuler
        </Link>
        </span>
        
      </Modal.Actions>
      </section>
    </Modal>
    
  )
}

export default ModalInscription
