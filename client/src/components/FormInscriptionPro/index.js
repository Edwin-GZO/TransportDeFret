import React, { useState } from 'react';
import Field from '../../containers/Field'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';

const FormInscriptionPro = ({ 
  isFormValid,
  signup,
  mailSignUp,
  password,
  passwordconfirm,
  phone,
  bill_street,
  bill_number,
  bill_track,
  bill_complement,
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
          name="mailSignUp"
          type="email"
          reducerName="register"
          placeholder="mail"
           />
           </Form.Field>

           <div className="ui form">
                <div className="two fields">
                <div className="field">

           <Form.Field>
          <label>N° de la voie</label>
          <Field
            name="bill_number"
            reducerName="register"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
          <label>Type voie</label>
          <Field
            name="bill_track"
            
            reducerName="register"
            placeholder=""
             />
             </Form.Field>
             </div>
             </div>
             </div>
             

   
        <Form.Field>
          <label>Nom de la voie</label>
          <Field
            name="bill_street"
            
            reducerName="register"
            placeholder=""
             
          />
        </Form.Field>
        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="bill_complement"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="city"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="postal_code"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
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
          name="passwordSignUp"
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
          name="passwordconfirmSignUp"
          type="password"
          reducerName="register"
          placeholder=""
        />
    </Form.Field>
    
    <Button>Validez</Button>
  </Form>


  </section>

    
)
  };

  FormInscriptionPro.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
  };


export default FormInscriptionPro;