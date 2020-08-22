import React from 'react'
import Field from '../../components/LoginForm/Field'
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'semantic-ui-react'
import './style.scss';

const ContactForm = ({

}) => {


    return (
<section className="contact">
<h1 className="title">Formulaire de contact</h1>

<Form>
    <Form.Field>
      <label>Nom</label>
      <input placeholder='' />
    </Form.Field>
    <Form.Field required>
      <label>Adresse Mail</label>
      <input placeholder='' />
    </Form.Field>
    <Form.Field required>
    <label>Votre message</label>
    <textarea fluid placeholder='Formulez votre demande...' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

  </section>





    )
}

export default ContactForm;