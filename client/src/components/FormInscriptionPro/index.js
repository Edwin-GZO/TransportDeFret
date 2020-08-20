import React from 'react'
import Field from '../LoginForm/Field'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './style.scss';

const FormInscriptionPro = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) =>{
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
 
  
  return(
  
  <section className="register">
  <h1 className="title">Formulaire d'inscription</h1>
  <Form >
    <Form.Field>
      <label>N° Siret</label>
      <Field name="siret"
            type="text"
            placeholder="N° siret"
            value=""
            onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Adresse Mail</label>
      <Field name="mail"
            type="email"
            placeholder="email"
            value=""
            onChange={handleChange} />
    </Form.Field>
        <Form.Field>
      <label>Adresse de facturation</label>
      <Field  name="billing_address"
            type="email"
            placeholder=""
            value=""
            onChange={handleChange}/>
    </Form.Field>
    <Form.Group className="ui grid">
    <Form.Field >
      <label>Ville</label>
      <Field  name="city"
            type="text"
            placeholder=""
            value=""
            onChange={handleChange}/>
    </Form.Field>
    <Form.Field >
      <label>Code postal</label>
      <Field name="postal_code"
            type="text"
            placeholder=""
            value=""
            onChange={handleChange} />
    </Form.Field>
    </Form.Group>
    <Form.Field>
      <label>Telephone</label>
      <Field name="town"
            type="text"
            placeholder=""
            value=""
            onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>Choisissez votre mot de passe (entre 8 et 16 caracteres avec majuscules et caracteres speciaux)</label>
      <Field  name="password"
            type="password"
            placeholder=""
            value=""
            onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Comfirmez votre mot de passe</label>
      <Field name="password"
            type="password"
            placeholder=""
            value=""
            onChange={handleChange}  />
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