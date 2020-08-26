import React, { useState } from 'react';
import Field from '../../containers/Field'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';


const FormInscriptionPart = ({ 
    isFormValid,
    handlesignuppart,
    nameSignUpPart,
    firstNameSignUpPart,
    mailSignUpPart,
    passwordSignUpPart,
    passwordconfirmSignUpPart,
    phoneSignUpPart,
    billStreetSignUpPart,
    billNumberSignUpPart,
    billTrackSignUpPart,
    citySignUpPart,
    postalCodeSignUpPart,
    hasError,
    isSamePassword
  }) => {
  
    const handleSubmitpart = (evt) => {
      evt.preventDefault();
  
      if (passwordSignUpPart !== passwordconfirmSignUpPart) {
        return
      }
      
      handlesignuppart();
      } 
    
    return (
    
      <section className="register">
        <h1 className="title">Formulaire d'inscription</h1>
        {
          hasError ? <p>modal</p> : null
        }
    <Form onSubmit={handleSubmitpart} >
  
      <Form.Field>
        <label>Nom</label>
        <Field
          name="nameSignUpPart"
          reducerName="registerPart"
          placeholder="Nom"
        />
      </Form.Field>
  
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="firstNameSignUpPart"
          
          reducerName="registerPart"
          placeholder="prénom"
        />
      </Form.Field>
  
      <Form.Field>
        <label>Adresse Mail</label>
          <Field 
            name="mailSignUpPart"
            type="mail"
            reducerName="registerPart"
            placeholder="mail"
             />
             </Form.Field>
  
             <div className="ui form">
                  <div className="two fields">
                  <div className="field">
  
             <Form.Field>
            <label>N° de la voie</label>
            <Field
              name="billNumberSignUpPart"
              reducerName="registerPart"
              placeholder=""
               />
              </Form.Field>
              </div>
  
              <div className="field">
            <Form.Field>
            <label>Type voie</label>
            <Field
              name="billTrackSignUpPart"
              
              reducerName="registerPart"
              placeholder=""
               />
               </Form.Field>
               </div>
               </div>
               </div>
               
  
     
          <Form.Field>
            <label>Nom de la voie</label>
            <Field
              name="billStreetSignUpPart"              
              reducerName="registerPart"
              placeholder=""
               
            />
          </Form.Field>
          <Form.Field>
            <label>Complément d'adresse</label>
            <Field  name="billComplementSignUpPart"                  
                  reducerName="registerPart"
                  placeholder=""
                  />
          </Form.Field>
          
  
  
          <div className="ui form">
                <div className="two fields">
                    <div className="field">
          <Form.Field >
            <label>Ville</label>
            <Field  name="citySignUpPart"
                  
                  reducerName="registerPart"
                  placeholder=""
                  />
          </Form.Field>
          </div>
  
          <div className="field">
          <Form.Field >
            <label>Code postal</label>
            <Field name="postalCodeSignUpPart"
                  
                  reducerName="registerPart"
                  placeholder=""
                  />
          </Form.Field>
          </div>
            </div>
            </div>
  
      
      <Form.Field>
        <label>Telephone</label>
        <Field name="phoneSignUpPart"              
              reducerName="registerPart"
              placeholder=""
                />
      </Form.Field>
      <Form.Field>
        <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
          <Field
            cssClass={!isSamePassword ? 'error' : ''}
            name="passwordSignUpPart"
            type="password"
            reducerName="registerPart"
            placeholder=""
            required={true}
            minLength={8}
          />
      </Form.Field>
      <Form.Field>
        <label>Confirmez votre mot de passe</label>
          <Field
            cssClass={!isSamePassword ? 'error' : ''}
            name="passwordconfirmSignUpPart"
            type="password"
            reducerName="registerPart"
            placeholder=""
          />
      </Form.Field>
      
      <Button className='submit-btn' disabled={isFormValid ? false : true} name="submit" type='submit'>Validez</Button>
    </Form>
  
  
    </section>
  
      
  )
    };
  
    FormInscriptionPart.propTypes = {
      isFormValid: PropTypes.bool.isRequired,
    };
  
  
  export default FormInscriptionPart;   