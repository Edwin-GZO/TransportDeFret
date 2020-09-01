import React from "react";
import { Link } from 'react-router-dom'
import "./style.scss";
import logo from '../../assets/images/IMG_2009.png'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalInscription() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeicon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='mini'
      trigger={<Button>Basic Modal</Button>}
    >
      
        
       
      <Modal.Content>
        <header as='h2' color='blue'>
          Vous désirez vous inscrire en tant que :
        </header>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='blue' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Professionnel
        </Button>
        <Button basic color='blue' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Particulier
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default ModalInscription
