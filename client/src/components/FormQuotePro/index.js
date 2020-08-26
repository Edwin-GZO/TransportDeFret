import React, { useState } from 'react';
import Field from '../../containers/Field'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';

const FormQuotePro = ({ 
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
    
    signup();
    } 
  
  return (
  
    <section className="quote">
      <h1 className="title">Demande de devis</h1>
      <h2 className="subtitle">Adresse de facturation</h2>
      
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
          name="mailSignUpPro"
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
            name="billNumberSignUpPro"
            reducerName="register"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
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
             

   
        <Form.Field>
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
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="citySignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="postalCodeSignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field>
      <label>Telephone</label>
      <Field name="phoneSignUpPro"
            
            reducerName="register"
            placeholder=""
              />
    </Form.Field>

    <h2 className="subtitle">Adresse de chargement</h2>
   
    <div className="ui form">
                <div className="two fields">
                <div className="field">
    <Form.Field>
        <label>Nom</label>
        <Field
          name="nameSignUpPart"
          reducerName="registerPart"
          placeholder="Nom"
        />
      </Form.Field>
      </div>
      <div className="field">
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="firstNameSignUpPart"
          
          reducerName="registerPart"
          placeholder="prénom"
        />
      </Form.Field>
      </div>
      </div>
             </div>

      <div className="ui form">
                <div className="two fields">
                <div className="field">

           <Form.Field>
          <label>N° de la voie</label>
          <Field
            name="billNumberSignUpPro"
            reducerName="register"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
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
             

   
        <Form.Field>
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
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="citySignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="postalCodeSignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field>
      <label>Telephone</label>
      <Field name="phoneSignUpPro"
            
            reducerName="register"
            placeholder=""
              />
    </Form.Field>

    <h2 className="subtitle">Adresse de livraison</h2>

    <div className="ui form">
                <div className="two fields">
                <div className="field">
    <Form.Field>
        <label>Nom</label>
        <Field
          name="nameSignUpPart"
          reducerName="registerPart"
          placeholder="Nom"
        />
      </Form.Field>
      </div>
      <div className="field">
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="firstNameSignUpPart"
          
          reducerName="registerPart"
          placeholder="prénom"
        />
      </Form.Field>
      </div>
      </div>
             </div>

      <div className="ui form">
                <div className="two fields">
                <div className="field">

           <Form.Field>
          <label>N° de la voie</label>
          <Field
            name="billNumberSignUpPro"
            reducerName="register"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
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
             

   
        <Form.Field>
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
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="citySignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="postalCodeSignUpPro"
                
                reducerName="register"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field>
      <label>Telephone</label>
      <Field name="phoneSignUpPro"
            
            reducerName="register"
            placeholder=""
              />
    </Form.Field>

    <h2 className="subtitle">Détails</h2>

    <div className="ui form">
                <div className="three fields">
                <div className="field">

           <Form.Field>
          <label>Nombre de palettes</label>
          <Field
            name="billNumberSignUpPro"
            reducerName="register"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
          <label>Poids (Kg)</label>
          <Field
            name="billTrackSignUpPro"
            
            reducerName="register"
            placeholder=""
             />
              </Form.Field>
              </div>
              <div className="field">
          <Form.Field>
          <label>Dimensions (cm)</label>
          <Field
            name="billTrackSignUpPro"
            
            reducerName="register"
            placeholder=""
             />
             </Form.Field>
             </div>
             </div>
             </div>
            
             

    <Button className='submit-btn' disabled={isFormValid ? false : true} name="submit" type='submit'>Validez</Button>
  </Form>


  </section>

    
)
  };

  FormQuotePro.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
  };


export default FormQuotePro;