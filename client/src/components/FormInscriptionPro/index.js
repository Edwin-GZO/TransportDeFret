import React from 'react'
import Field from '../../components/LoginForm/Field'
import PropTypes from 'prop-types';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './style.scss';

const FormInscriptionPro = ({
  mail,
  changeField,
  signup,
  password,
  phone,
  bill_address,
  siret,
  city,
  postal_code,
  societe,
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
      <Field name="siret"
            type="text"
            placeholder="N° siret"
            value={siret}
            onChange={changeField} />
    </Form.Field>
    <Form.Field>
      <label>Sosiete</label>
      <Field name="societe"
            type="text"
            placeholder="société"
            value={societe}
            onChange={changeField} />
    </Form.Field>
    <Form.Field>
      <label>Adresse Mail</label>
      <Field name="mail"
            type="mail"
            placeholder="mail"
            value={mail}
            onChange={changeField} />
    </Form.Field>
        <Form.Field>
      <label>Adresse de facturation</label>
      <Field  name="bill_address"
            type="text"
            placeholder=""
            value={bill_address}
            onChange={changeField}/>
    </Form.Field>
    <Form.Group className="ui grid">
    <Form.Field >
      <label>Ville</label>
      <Field  name="city"
            type="text"
            placeholder=""
            value={city}
            onChange={changeField}/>
    </Form.Field>
    <Form.Field >
      <label>Code postal</label>
      <Field name="postal_code"
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
      <Field name="passwordconfirm"
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
  };

  FormInscriptionPro.propTypes = {
    mail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordconfirm: PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    phone:PropTypes.string.isRequired,
    postal_code:PropTypes.string.isRequired,
    bill_address:PropTypes.string.isRequired,
    societe:PropTypes.string.isRequired,
    isLogged: PropTypes.bool,
    
  };


export default FormInscriptionPro;