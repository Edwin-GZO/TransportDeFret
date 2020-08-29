import React from 'react'
import { Link } from 'react-router-dom';
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
<h1 class="ui dark header">Formulaire de contact</h1>
{contactMessage ? <p>{contactMessage}</p> : null}
<Form autoComplete="off" onSubmit={handleContact}>

    <Form.Field >
      <label>Nom</label>
      <Field 
      id="bg"
      reducerName="contact"
      name='nameContact'
      placeholder=''/>
    </Form.Field>

    <Form.Field required>
      <label>Objet</label>
      <Field 
      id="bg"
      reducerName="contact"
      name='subjectContact'
      placeholder=''/>
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
      <Field 
      id="bg"
      name='mailContact'
      reducerName="contact"
      type='email'
      placeholder=''
       />

    </Form.Field>


    
    <Form.Field required>
    
    <label>Votre message</label>    
     
    
    
    <Field
    id="bg"
      type="textarea"
      reducerName="contact"
      name='commentContact'
      placeholder='Formulez votre demande ...'
      cssClass='field-input'
    />  
          
      </Form.Field>
    


      <div className="btn">       
<span className="">
          <Button className="ui primary button">Validez</Button>
  </span>
  <span>
  <Link button className="ui negative button" to="/">
  Annuler
</Link>
</span>
</div>
  </Form>

  </section>


    )
};



export default ContactForm;