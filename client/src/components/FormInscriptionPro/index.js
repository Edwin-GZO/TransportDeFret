import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../containers/Field';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import logo from '../../assets/images/IMG_2009.png';
import './style.scss';

const FormInscriptionPro = ({ 
  signUpMessage,
  signup,  
  passwordSignUpPro,
  passwordconfirmSignUpPro,  
  hasError,
  isSamePassword,
  history,
  
}) => {

  console.log(signUpMessage);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (passwordSignUpPro !== passwordconfirmSignUpPro) {
      return
    }
    
    signup();
    setTimeout(() => history.push('/'), 3000);
    
    } 

      
  return (
  
    

    <section className="register">

<div id='mainTitle'>
    <img  style={{width:250,height:250}} src={logo}/>
    </div>
    
     <h1 class="ui dark header">Formulaire d'inscription professionnel</h1>
     
     
     
     
     {signUpMessage ? <span>{signUpMessage}</span> : null}
      

  <Form onSubmit={handleSubmit} >

    <Form.Field required>
      <label>N° Siret</label>
      <Field
      required="true"
      id="bg"
        name="siret"
        reducerName="register"
        placeholder="xxx xxx xxx xxxxx"
        
        
      />
    </Form.Field>

    <Form.Field required>
      <label>Societe</label>
      <Field 
      required="true"
      id="bg"
        name="societe"
        reducerName="register"
        placeholder=""
        
      />
    </Form.Field>

    <Form.Field required>
      <label>Adresse Mail</label>
        <Field 
        required="true"
        id="bg"
          name="mailSignUpPro"
          
          reducerName="register"
          placeholder="john@doe.com"
          
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
            required="true"
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
            required="true"
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
            required="true"
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
                required="true"
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field required>
          <label>Code postal</label>
          <Field name="postalCodeSignUpPro"
                id="bg"
                reducerName="register"
                placeholder="xxxxx"
                required="true"
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field required>
      <label >Telephone</label>
            <Field 
            name="phoneSignUpPro"
            required="true"
            id="bg"
            reducerName="register"
            placeholder="xxxxxxxxxx"
            type="text"
              /> 
    </Form.Field>

    

    <Form.Field required data-tooltip="Entre 8 et 16 caractères, une majuscule et 1 caractère spécial ( _!@#$%^&*)" data-position="top-center" >
        <label >Choisissez votre mot de passe</label>
        <Field 
          cssClass={!isSamePassword ? 'error' : ''}
          name="passwordSignUpPro"
          reducerName="register"
          placeholder="........"
          id="bg"
          required="true"
          type="password"
        />
    </Form.Field>
    <Form.Field required>
      <label>Confirmez votre mot de passe</label>
        <Field
          cssClass={!isSamePassword ? 'error' : ''}
          name="passwordconfirmSignUpPro"
          
          reducerName="register"
          placeholder="........"
          id="bg"
          required="true"
          type="password"
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