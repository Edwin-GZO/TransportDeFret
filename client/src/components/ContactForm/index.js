import React from 'react'
import Field from '../../components/LoginForm/Field'
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react'
import './style.scss';


const ContactForm = ({
    name,
    mail,
    message,
    object,
    value,
    changeField,
    submitcontact,
    

}) => {
    const handleContact = (evt) => {
        evt.preventDefault();
        submitcontact();
      };


    return (
<section className="contact">
<h1 className="title">Formulaire de contact</h1>

<Form autoComplete="off" className="login-box" onSubmit={handleContact}>

    <Form.Field>
      <label>Nom</label>
      <Field 
      name='name'
      placeholder=''
      onChange={changeField}
      value={name}/>
    </Form.Field>

    <Form.Field>
      <label>Objet</label>
      <Field 
      name='object'
      placeholder=''
      onChange={changeField}
      value={object}/>
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
      <Field 
      name='mail'
      type='email'
      placeholder=''
      onChange={changeField}
      value={mail}
       />

    </Form.Field>


    
    <Form.Field required>
    
    <label>Votre message</label>    
     
    
    
    <Field
     
     name='message'
     placeholder='Formulez votre demande ...'
     onChange={changeField}
     value={value}
     message={message}
     
     
      />  
          
      </Form.Field>
    


    <Button type='submit'>Validez</Button>
  </Form>

  </section>


    )
};



export default ContactForm;