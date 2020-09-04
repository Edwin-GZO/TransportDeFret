import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../containers/Field';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import logo from '../../assets/images/IMG_2009.png';
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
    isSamePassword,
    isEmailOk,
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

<div id='mainTitle'>
      <img  style={{width:250,height:250}} src={logo}/>
      </div>
      
       <h1 class="ui dark header">Formulaire d'inscription particulier</h1>
        {
          hasError ? <p>modal</p> : null
        }
    <Form onSubmit={handleSubmitpart} >
  
      <Form.Field required >
        <label>Nom</label>
        <Field
        required="true"
          name="nameSignUpPart"
          reducerName="registerPart"
          placeholder="Nom"
          id="bg"
        />
      </Form.Field>
  
      <Form.Field required>
        
        <label>Prénom</label>
        <Field 
        required="true"
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
            required="true"
            reducerName="registerPart"
            placeholder="john@doe.com"
             />
             </Form.Field>
  
             <div className="ui form">
                  <div className="two fields">
                  <div className="field">
  
             <Form.Field required>
            <label>N° de la voie</label>
            <Field
            required="true"
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
            required="true"
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
            required="true"
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
            <Field 
            required="true"
             name="citySignUpPart"
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
            required="true"
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
              required="true"
              id="bg"
                />
      </Form.Field>
      <Form.Field required>
        <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
          <Field
            cssClass={!isSamePassword ? 'error' : ''}
            name="passwordSignUpPart"
            
            reducerName="registerPart"
            placeholder=""
            required="true"
            
            id="bg"
          />
      </Form.Field>
      <Form.Field required>
        <label>Confirmez votre mot de passe</label>
          <Field
          required="true"
            cssClass={!isSamePassword ? 'error' : ''}
            name="passwordconfirmSignUpPart"
            
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