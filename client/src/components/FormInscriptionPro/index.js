import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../containers/Field';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
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
     <h1 class="ui dark header">Formulaire d'inscription professionnel</h1>
      {
        hasError ? <p>modal</p> : null
      }
  <Form onSubmit={handleSubmit} >

    <Form.Field required>
      <label>N° Siret</label>
      <Field
      id="bg"
        name="siret"
        reducerName="register"
        placeholder="N° siret"
        required={true}
        minLength={14}
        maxLength={14}
      />
    </Form.Field>

    <Form.Field required>
      <label>Societe</label>
      <Field 
      id="bg"
        name="societe"
        reducerName="register"
        placeholder="société"
        required={true}
      />
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
        <Field 
        id="bg"
          name="mailSignUpPro"
          type="email"
          reducerName="register"
          placeholder="mail"
          required={true}
           />
           </Form.Field>

           <div className="ui form">
                <div className="two fields">
                <div className="field">

           <Form.Field required>
          <label>N° de la voie</label>
          <Field
          id="bg"
            name="billNumberSignUpPro"
            reducerName="register"
            placeholder=""
            required={true}
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field required>
          <label>Type voie</label>
          <Field
            name="billTrackSignUpPro"
            id="bg"
            reducerName="register"
            placeholder=""
            required={true}
             />
             </Form.Field>
             </div>
             </div>
             </div>
             

   
        <Form.Field required>
          <label>Nom de la voie</label>
          <Field
            name="billStreetSignUpPro"
            id="bg"
            reducerName="register"
            placeholder=""
            required={true}
          />
        </Form.Field>
        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="billComplementSignUpPro"
                id="bg"
                reducerName="register"
                placeholder=""
                
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field required>
          <label>Ville</label>
          <Field  name="citySignUpPro"
                id="bg"
                reducerName="register"
                placeholder=""
                required={true}
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field required>
          <label>Code postal</label>
          <Field name="postalCodeSignUpPro"
                id="bg"
                reducerName="register"
                placeholder=""
                required={true}
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field >
      <label >Telephone</label>
            <Field 
            name="phoneSignUpPro"
            id="bg"
            reducerName="register"
            placeholder=""
            type="text"
              /> 
    </Form.Field>
    <Form.Field required data-tooltip="Entre 8 et 16 caractères, une Maj et 1 caractère spécial" data-position="top-center" >
        <label >Choisissez votre mot de passe</label>
        <Field 
          cssClass={!isSamePassword ? 'error' : ''}
          name="passwordSignUpPro"
          type="password"
          reducerName="register"
          placeholder=""
          id="bg"
          required={true}
          minLength={8}
          maxLength={16}
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
          id="bg"
          required={true}
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

  FormInscriptionPro.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
  };


export default FormInscriptionPro;