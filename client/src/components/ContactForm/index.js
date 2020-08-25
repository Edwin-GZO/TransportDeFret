import React from 'react'
import Field from '../../containers/Field.js'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';


const ContactForm = ({ submitcontact, contactMessage }) => {
    const handleContact = (evt) => {
        evt.preventDefault();
        submitcontact();
      };


    return (
<section className="contact">
<h1 className="title">Formulaire de contact</h1>
{contactMessage ? <p>{contactMessage}</p> : null}
<Form autoComplete="off" className="login-box" onSubmit={handleContact}>

    <Form.Field >
      <label>Nom</label>
      <Field 
      reducerName="contact"
      name='name'
      placeholder=''/>
    </Form.Field>

    <Form.Field required>
      <label>Objet</label>
      <Field 
      reducerName="contact"
      name='object'
      placeholder=''/>
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
      <Field 
      name='mail'
      reducerName="contact"
      type='email'
      placeholder=''
       />

    </Form.Field>


    
    <Form.Field required>
    
    <label>Votre message</label>    
     
    
    
    <Field
      type="textarea"
      reducerName="contact"
      name='message'
      placeholder='Formulez votre demande ...'
      cssClass='field-input'
    />  
          
      </Form.Field>
    


    <Button type='submit'>Validez</Button>
  </Form>

  </section>


    )
};



export default ContactForm;