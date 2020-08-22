import React from 'react'
import Field from '../../components/LoginForm/Field'
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'semantic-ui-react'
import './style.scss';

const ContactForm = ({
    name,
    mail,
    message,
    changeField,
    submit,

}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };


    return (
<section className="contact">
<h1 className="title">Formulaire de contact</h1>

<Form>

    <Form.Field>
      <label>Nom</label>
      <Field 
      name='name'
      placeholder=''
      onChange={changeField}
      value={name}/>
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
      <Field 
      name='email'
      placeholder=''
      onChange={changeField}
      value={mail}
       />

    </Form.Field>
    <Form.Field required>
    <label>Votre message</label>
    <textarea fluid 
    name='message'
    placeholder='Formulez votre demande...'
    onChange={changeField}
      value={message} />
    </Form.Field>
    <Button type='submit'>Validez</Button>
  </Form>

  </section>


    )
}

export default ContactForm;