import React, { useState } from 'react';
import Field from '../../containers/Field'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';

const FormInscriptionPro = ({ 
  isFormValid,
  signup,
  mail,
  password,
  passwordconfirm,
  phone,
  bill_address,
  complement,
  siret,
  city,
  postal_code,
  societe,
  hasError,
  isSamePassword
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (password !== passwordconfirm) {
      return
    }
    
    signup('pro');
    } 
  
  return (
  
    <section className="register">
      <h1 className="title">Formulaire d'inscription</h1>
      {
        hasError ? <p>modal</p> : null
      }
  <Form onSubmit={handleSubmit} >
    <Form.Field>
      <label>N° Siret</label>
      <Field
        name="siret"
        reducerName="register"
        placeholder="N° siret"
      />
    </Form.Field>
    <Form.Field>
      <label>Societe</label>
      <Field 
        name="societe"
        
        reducerName="register"
        placeholder="société"
      />
    </Form.Field>
    <Form.Field>
      <label>Adresse Mail</label>
        <Field 
          name="mail"
          type="mail"
          reducerName="register"
          placeholder="mail"
           />
    </Form.Field>
        <Form.Field>
          <label>Adresse de facturation</label>
          <Field
            name="bill_address"
            
            reducerName="register"
            placeholder=""
             
          />
    </Form.Field>
    <Form.Field>
      <label>Complément d'adresse</label>
      <Field  name="complement"
            
            reducerName="register"
            placeholder=""
            />
    </Form.Field>
    <Form.Group className="ui grid">
    <Form.Field >
      <label>Ville</label>
      <Field  name="city"
            
            reducerName="register"
            placeholder=""
            />
    </Form.Field>
    <Form.Field >
      <label>Code postal</label>
      <Field name="postal_code"
            
            reducerName="register"
            placeholder=""
             />
    </Form.Field>
    </Form.Group>
    <Form.Field>
      <label>Telephone</label>
      <Field name="phone"
            
            reducerName="register"
            placeholder=""
              />
    </Form.Field>
    <Form.Field>
      <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
        <Field
          cssClass={!isSamePassword ? 'error' : ''}
          name="password"
          type="password"
          reducerName="register"
          placeholder=""
          required={true}
          minLength={8}
        />
    </Form.Field>
    <Form.Field>
      <label>Confirmez votre mot de passe</label>
        <Field
          cssClass={!isSamePassword ? 'error' : ''}
          name="passwordconfirm"
          type="password"
          reducerName="register"
          placeholder=""
        />
    </Form.Field>
    
    <Button className='submit-btn' disabled={isFormValid ? false : true} name="submit" type='submit'>Validez</Button>
  </Form>


  </section>

    
)
  };

  FormInscriptionPro.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
  };


export default FormInscriptionPro;