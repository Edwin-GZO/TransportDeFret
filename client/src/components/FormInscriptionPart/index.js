import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../containers/Field';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
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
       <h1 class="ui dark header">Formulaire d'inscription particulier</h1>
        {
          hasError ? <p>modal</p> : null
        }
    <Form onSubmit={handleSubmitpart} >
  
      <Form.Field required >
        <label>Nom</label>
        <Field
          name="nameSignUpPart"
          reducerName="registerPart"
          placeholder="Nom"
          id="bg"
        />
      </Form.Field>
  
      <Form.Field required >
        <label>Prénom</label>
        <Field 
          name="firstNameSignUpPart"
          id="bg"
          reducerName="registerPart"
          placeholder="prénom"
        />
      </Form.Field>
  
      <Form.Field required >
        <label>Adresse Mail</label>
          <Field 
          id="bg"
            name="mailSignUpPart"
            type="mail"
            reducerName="registerPart"
            placeholder="mail"
             />
             </Form.Field>
  
             <div className="ui form">
                  <div className="two fields">
                  <div className="field">
  
             <Form.Field required>
            <label>N° de la voie</label>
            <Field
            id="bg"
              name="billNumberSignUpPart"
              reducerName="registerPart"
              placeholder=""
               />
              </Form.Field>
              </div>
  
              <div className="field">
            <Form.Field required>
            <label>Type voie</label>
            <Field
              name="billTrackSignUpPart"
              id="bg"
              reducerName="registerPart"
              placeholder=""
               />
               </Form.Field>
               </div>
               </div>
               </div>
               
  
     
          <Form.Field required>
            <label>Nom de la voie</label>
            <Field
              name="billStreetSignUpPart"              
              reducerName="registerPart"
              placeholder=""
              id="bg"
            />
          </Form.Field>
          <Form.Field>
            <label>Complément d'adresse</label>
            <Field  
            id="bg"
            name="billComplementSignUpPart"                  
                  reducerName="registerPart"
                  placeholder=""
                  />
          </Form.Field>
          
  
  
          <div className="ui form">
                <div className="two fields">
                    <div className="field">
          <Form.Field required>
            <label>Ville</label>
            <Field  name="citySignUpPart"
                  id="bg"
                  reducerName="registerPart"
                  placeholder=""
                  />
          </Form.Field>
          </div>
  
          <div className="field">
          <Form.Field required>
            <label>Code postal</label>
            <Field name="postalCodeSignUpPart"
                  id="bg"
                  reducerName="registerPart"
                  placeholder=""
                  />
          </Form.Field>
          </div>
            </div>
            </div>
  
      
      <Form.Field required>
        <label>Telephone</label>
        <Field name="phoneSignUpPart"              
              reducerName="registerPart"
              placeholder=""
              type=""
              id="bg"
                />
      </Form.Field>
      <Form.Field required>
        <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
          <Field
            cssClass={!isSamePassword ? 'error' : ''}
            name="passwordSignUpPart"
            type="password"
            reducerName="registerPart"
            placeholder=""
            required={true}
            minLength={8}
            id="bg"
          />
      </Form.Field>
      <Form.Field required>
        <label>Confirmez votre mot de passe</label>
          <Field
            cssClass={!isSamePassword ? 'error' : ''}
            name="passwordconfirmSignUpPart"
            type="password"
            reducerName="registerPart"
            placeholder=""
            id="bg"
          />
      </Form.Field>
      
      <div className="btn">       
<span className="">
          <Button className="ui primary button">Validez</Button>
  </span>
  <span>
  <Link button className="ui grey button" to="/">
  Annuler
</Link>
</span>
</div>
    </Form>
  
  
    </section>
  
      
  )
    };
  
    FormInscriptionPart.propTypes = {
      isFormValid: PropTypes.bool.isRequired,
    };
  
  
  export default FormInscriptionPart;   