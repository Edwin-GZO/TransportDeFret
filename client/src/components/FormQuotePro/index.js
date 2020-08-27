import React, { useState, useEffect } from 'react';
import Field from '../../containers/Field'
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './style.scss';

const FormQuotePro = ({
  submitquote,
  handlesubmitquote,
  isFormValid,
  signup,
  hasError,
  isSamePassword,
  billSiretQuotePro,
  billSocieteQuotePro,
  billMailQuotePro,
  billNumberQuotePro,
  billTrackQuotePro,
  billStreetQuotePro,
  billComplementQuotePro,
  billCityQuotePro,
  billPostalCodeQuotePro,
  billPhoneQuotePro,
  loadNameQuotePro,
  loadFirstNameQuotePro,
  loadNumberQuotePro,
  loadTrackQuotePro,
  loadStreetQuotePro,
  loadComplementQuotePro,
  loadCityQuotePro,
  loadPostalCodeQuotePro,
  loadPhoneQuotePro,
  nameDeliveryQuotePro,
  firstNameDeliveryQuotePro,
  deliveryNumberQuotePro,
  deliveryTrackQuotePro,
  deliveryStreetQuotePro,
  deliveryComplementQuotePro,
  deliveryCityQuotePro,
  deliveryCodeQuotePro,
  deliveryphoneQuotePro,
  paletteNumberQuotePro,
  weightQuotePro,
  lenghtQuotePro,
  widthQuotePro,
  heightQuotePro,
  commentQuotePro,
  // history
}) => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(()=> {
  //   if(isLoggedIn) {
  //     console.log('click');
  //     setTimeout(() => history.push('/'), 2000);
  //   }
  // }, [isLoggedIn])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitquote();
  } 
  
  return (
  
    <section className="quote">
      
    {/* <button onClick={()=> setIsLoggedIn(true)}>click</button> */}

     {/* {isLoggedIn ? <p>some text</p> : */}
      
      <h1 className="title">Demande de devis</h1>
      <h2 className="subtitle">Adresse de facturation</h2>

      {/* {isLoggedIn ? <p>some text</p> : */}
      
  <Form autoComplete="off" onSubmit={handleSubmit} >

    <Form.Field>
      <label>N° Siret</label>
      <Field
        name="billSiretQuotePro"
        reducerName="quotePro"
        placeholder="N° siret"
       
      />
    </Form.Field>

    <Form.Field>
      <label>Societe</label>
      <Field 
        name="billSocieteQuotePro"
        reducerName="quotePro"
        placeholder="société"
      />
    </Form.Field>

    <Form.Field>
      <label>Adresse Mail</label>
        <Field 
          name="billMailQuotePro"
          type="email"
          reducerName="quotePro"
          placeholder="mail"
           />
           </Form.Field>

           <div className="ui form">
                <div className="two fields">
                <div className="field">

           <Form.Field>
          <label>N° de la voie</label>
          <Field
            name="billNumberQuotePro"
            reducerName="quotePro"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
          <label>Type voie</label>
          <Field
            name="billTrackQuotePro"            
            reducerName="quotePro"
            placeholder=""
             />
             </Form.Field>
             </div>
             </div>
             </div>
             

   
        <Form.Field>
          <label>Nom de la voie</label>
          <Field
            name="billStreetQuotePro"
            
            reducerName="quotePro"
            placeholder=""
             
          />
        </Form.Field>
        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="billComplementQuotePro"                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="billCityQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="billPostalCodeQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field>
      <label>Telephone</label>
      <Field name="billPhoneQuotePro"
            
            reducerName="quotePro"
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
          name="loadNameQuotePro"
          reducerName="quotePro"
          placeholder="Nom"
        />
      </Form.Field>
      </div>
      <div className="field">
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="loadFirstNameQuotePro"
          
          reducerName="quotePro"
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
            name="loadNumberQuotePro"
            reducerName="quotePro"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
          <label>Type voie</label>
          <Field
            name="loadTrackQuotePro"
            
            reducerName="quotePro"
            placeholder=""
             />
             </Form.Field>
             </div>
             </div>
             </div>
             

   
        <Form.Field>
          <label>Nom de la voie</label>
          <Field
            name="loadStreetQuotePro"
            
            reducerName="quotePro"
            placeholder=""
             
          />
        </Form.Field>

        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="loadComplementQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="loadCityQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="loadPostalCodeQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field>
      <label>Telephone</label>
      <Field name="loadPhoneQuotePro"
            
            reducerName="quotePro"
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
          name="nameDeliveryQuotePro"
          reducerName="quotePro"
          placeholder="Nom"
        />
      </Form.Field>
      </div>
      <div className="field">
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="firstNameDeliveryQuotePro"
          
          reducerName="quotePro"
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
            name="deliveryNumberQuotePro"
            reducerName="quotePro"
            placeholder=""
             />
            </Form.Field>
            </div>

            <div className="field">
          <Form.Field>
          <label>Type voie</label>
          <Field
            name="deliveryTrackQuotePro"
            
            reducerName="quotePro"
            placeholder=""
             />
             </Form.Field>
             </div>
             </div>
             </div>
             

   
        <Form.Field>
          <label>Nom de la voie</label>
          <Field
            name="deliveryStreetQuotePro"
            
            reducerName="quotePro"
            placeholder=""
             
          />
        </Form.Field>

        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="deliveryComplementQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  name="deliveryCityQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="deliveryCodeQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>

    
    <Form.Field>
      <label>Telephone</label>
      <Field name="deliveryphoneQuotePro"
            
            reducerName="quotePro"
            placeholder=""
              />
    </Form.Field>

    <h2 className="subtitle">Détails</h2>

    

           <Form.Field>
          <label>Nombre de palettes</label>
          <Field
           
            type="select"
            name="paletteNumberQuotePro"
            reducerName="quotePro"
            placeholder="1"
            
             />
            </Form.Field>

            <h5 className="subtitle">OU</h5>
            
            <div className="ui form">
              <div className="three fields">
                  <div className="field">
        <Form.Field >
          <label>Longueur (cm)</label>
          <Field  name="lenghtQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Largeur (cm)</label>
          <Field name="widthQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>
        <div className="field">
        <Form.Field >
          <label>Hauteur (cm)</label>
          <Field name="heightQuotePro"
                
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>
          </div>
          </div>
             <h5 className="subtitle">ET</h5>
            
          <Form.Field>
          <label>Poids (Kg)</label>
          <Field
            name="weightQuotePro"
            
            reducerName="quotePro"
            placeholder=""
             />
              </Form.Field>
             
              
             

             <Field
      type="textarea"
      reducerName="contact"
      name='commentQuotePro'
      placeholder='Commentaires ... ...'
      cssClass='field-input'
    />  
            
             
<div className="submit">
          <Button >Validez</Button>
  </div>
  </Form>
{/* } */}

  </section>

    
)
  };

  FormQuotePro.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
  };


export default FormQuotePro;