import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
  quoteMessage,
  // history
}) => {

   //const [isLoggedIn, setIsLoggedIn] = useState(false)

  //useEffect(()=> {
  // if(isLoggedIn) {
  //    console.log('click');
  //    setTimeout(() => history.push('/'), 2000);
    // }
  // }, [isLoggedIn])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitquote();
  } 
  
  return (
  
    <section className="quote">
      
    {/* <button onClick={()=> setIsLoggedIn(true)}>click</button> */}

     {/* {isLoggedIn ? <p>some text</p> : */}
      
     <h1 class="ui dark header">Demande de devis</h1>
    
      
  <Form autoComplete="off" onSubmit={handleSubmit} >

    
<section className="chargement">
  <h2 id="h2" class="ui blue header">Adresse de chargement</h2>
   
    <div className="ui form">
                <div className="two fields">
                <div className="field">
    <Form.Field>
    
        <label>Nom</label>
        <Field
          id="bg"   
          name="loadNameQuotePro"
          reducerName="quotePro"
          placeholder=""
        />
      </Form.Field>
      </div>
      <div className="field">
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="loadFirstNameQuotePro"
          id="bg"
          reducerName="quotePro"
          placeholder=""
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
           id="bg"
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
            id="bg"
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
            id="bg"
            reducerName="quotePro"
            placeholder=""
             
          />
        </Form.Field>

        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  
                name="loadComplementQuotePro"
                 id="bg"
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        


        <div className="ui form">
              <div className="two fields">
                  <div className="field">
        <Form.Field >
          <label>Ville</label>
          <Field  
                name="loadCityQuotePro"
                id="bg"
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="loadPostalCodeQuotePro"
                 id="bg"
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
             id="bg"
            reducerName="quotePro"
            placeholder=""
              />
    </Form.Field>
    </section>

    <h2 id="h2" class="ui blue header">Adresse de livraison</h2>

    <div className="ui form">
                <div className="two fields">
                <div className="field">
    <Form.Field>
        <label>Nom</label>
        <Field
         id="bg"
          name="nameDeliveryQuotePro"
          reducerName="quotePro"
          placeholder=""
        />
      </Form.Field>
      </div>
      <div className="field">
      <Form.Field>
        <label>Prénom</label>
        <Field 
          name="firstNameDeliveryQuotePro"
          id="bg"
          reducerName="quotePro"
          placeholder=""
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
           id="bg"
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
            id="bg"
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
            id="bg"
            reducerName="quotePro"
            placeholder=""
             
          />
        </Form.Field>

        <Form.Field>
          <label>Complément d'adresse</label>
          <Field  name="deliveryComplementQuotePro"
                 id="bg"
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
                 id="bg"
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Code postal</label>
          <Field name="deliveryCodeQuotePro"
                 id="bg"
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
             id="bg"
            reducerName="quotePro"
            placeholder=""
              />
    </Form.Field>

    <h2 id="h2" class="ui blue header">Détails</h2>

    

           <Form.Field>
          <label>Nombre de palettes</label>
          <Field
            id="bg"
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
                 id="bg"
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>

        <div className="field">
        <Form.Field >
          <label>Largeur (cm)</label>
          <Field name="widthQuotePro"
                 id="bg"
                reducerName="quotePro"
                placeholder=""
                />
        </Form.Field>
        </div>
        <div className="field">
        <Form.Field >
          <label>Hauteur (cm)</label>
          <Field name="heightQuotePro"
                 id="bg"
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
            id="bg"
            reducerName="quotePro"
            placeholder=""
             />
              </Form.Field>
             
              
             

             <Field
      type="textarea"
      //id="bg"
      reducerName="contact"
      name='commentQuotePro'
      placeholder='Commentaires éventuels ...'
      cssClass='field-input'
    />  
            {quoteMessage ? <span>{quoteMessage}</span> : null}

   <div className="btn">       
<span className="">
          <Button className="ui primary button">Validez</Button>
  </span>
  <span>
  <Link button="true" className="ui grey button" to="/">
  Annuler
</Link>
</span>
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