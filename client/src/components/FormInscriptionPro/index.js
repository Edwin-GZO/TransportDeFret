import React from 'react'
import Field from '../../components/LoginForm/Field'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './style.scss';

const FormInscriptionPro = ({
 email,
 changeField,
 signup,
 password,
 phone,
 bill_adress,
 siret,
 city,
 postal_code,
}) =>{
  
  
  const handleSignUp = (evt) => {
    evt.preventDefault();
    signup();
  };

  
  return(
  
  <section className="register">
  <h1 className="title">Formulaire d'inscription</h1>
  <Form onSubmit={handleSignUp} >
    <Form.Field>
      <label>N° Siret</label>
      <Field name="text"
            type="text"
            placeholder="N° siret"
            value={siret}
            onChange={changeField} />
    </Form.Field>
    <Form.Field>
      <label>Adresse Mail</label>
      <Field name="email"
            
            placeholder="email"
            value={email}
            onChange={changeField} />
    </Form.Field>
        <Form.Field>
      <label>Adresse de facturation</label>
      <Field  name="billing_address"
            type="text"
            placeholder=""
            value={bill_adress}
            onChange={changeField}/>
    </Form.Field>
    <Form.Group className="ui grid">
    <Form.Field >
      <label>Ville</label>
      <Field  name="text"
            type="text"
            placeholder=""
            value={city}
            onChange={changeField}/>
    </Form.Field>
    <Form.Field >
      <label>Code postal</label>
      <Field name="text"
            type="text"
            placeholder=""
            value={postal_code}
            onChange={changeField} />
    </Form.Field>
    </Form.Group>
    <Form.Field>
      <label>Telephone</label>
      <Field name="phone"
            type="text"
            placeholder=""
            value={phone}
            onChange={changeField}  />
    </Form.Field>
    <Form.Field>
      <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
      <Field  name="password"
            type="password"
            placeholder=""
            value={password}
            onChange={changeField} />
    </Form.Field>
    <Form.Field>
      <label>Comfirmez votre mot de passe</label>
      <Field name="paswword"
            type="password"
            placeholder=""
            value={password}
            onChange={changeField}  />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Accepter les termes et conditions' />
    </Form.Field>
    <Button type='submit'>Validez</Button>
  </Form>


  </section>


)
  }
export default FormInscriptionPro;