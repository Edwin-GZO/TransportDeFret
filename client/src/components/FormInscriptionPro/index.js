import React, { useState } from 'react';
import Field from '../../containers/Field'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';

const FormInscriptionPro = ({ 
  isFormValid,
  signup,
  mailSignUpPro,
  passwordSignUpPro,
  passwordconfirmSignUpPro,
  phoneSignUpPro,
  billStreetSignUpPro,
  billNumberSignUpPro,
  billTrackSignUpPro,
  billComplementSigPUpro,
  siret,
  citySignUpPro,
  postalCodeSignUpPro,
  societe,
  hasError,
  isSamePassword
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (passwordSignUpPro !== passwordconfirmSignUpPro) {
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

    <Form.Field required>
      <label>N° Siret</label>
      <Field
        name="siret"
        reducerName="register"
        placeholder="N° siret"
      />
    </Form.Field>

    <Form.Field required>
      <label>Societe</label>
      <Field 
        name="societe"
        reducerName="register"
        placeholder="société"
      />
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
        <Field 
          name="mailSignUpPro"
          type="email"
          reducerName="register"
          placeholder="mail"
           />
           </Form.Field>

           <div className="ui form">
                <div className="two fields">
                <div className="field">

           <Form.Field required>
          <label>N° de la voie</label>
          <Field
            name="billNumberSignUpPro"
            reducerName="register"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field required>
          <label>Type voie</label>
          <Field
            name="billTrackSignUpPro"
            
            reducerName="register"
            placeholder=""
             />
             </Form.Field>
             </div>
             </div>
             </div>
             

   
        <Form.Field required>
          <label>Nom de la voie</label>
          <Field
            name="billStreetSignUpPro"
            
            reducerName="register"
            placeholder=""
             
          />
        </Form.Field>
        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="billComplementSignUpPro"
                
                reducerName="register"
                placeholder=""
                required={true}
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field required>
          <label>Ville</label>
          <Field  name="citySignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field required>
          <label>Code postal</label>
          <Field name="postalCodeSignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field required>
      <label>Telephone</label>
      <Field name="phoneSignUpPro"
            
            reducerName="register"
            placeholder=""
              />
    </Form.Field>
    <Form.Field required>
      <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
        <Field
          cssClass={!isSamePassword ? 'error' : ''}
          name="passwordSignUpPro"
          type="password"
          reducerName="register"
          placeholder=""
          required={true}
          minLength={8}
        />
    </Form.Field>
    <Form.Field required>
      <label>Confirmez votre mot de passe</label>
        <Field
          cssClass={!isSamePassword ? 'error' : ''}
          name="passwordconfirmSignUpPro"
          type="password"
          reducerName="register"
          placeholder=""
        />
    </Form.Field>
    
    <Button >Validez</Button>
  </Form>


  </section>

    
)
  };

  FormInscriptionPro.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
  };


export default FormInscriptionPro;