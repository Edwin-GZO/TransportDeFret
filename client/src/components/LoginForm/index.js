import React from 'react';
import Field from '../../containers/Field';
import { Link } from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'

const LoginForm = ({
  mail,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin();
      };

            
    return(
             
      <section className="login">
      <h1 class="ui dark header">Formulaire de contact</h1>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          
        <Form.Field >
      <label>Adresse mail</label>
          <Field 
            name="mailLogin"
            reducerName="user"
            placeholder="Adresse Email"
            id="bg"
          />
        </Form.Field>
      
        <Form.Field >
      <label>Mot de passe</label>
            <Field
            id="bg"
            name="passwordLogin"
            reducerName="user"
            type="password"
            placeholder="Mot de Passe"
          />
           </Form.Field>
         
           <div className="btn">       
<span className="">
          <Button className="ui primary button">Validez</Button>
  </span>
  <span>
  <Link button className="ui negative button" to="/">
  Annuler
</Link>
</span>
</div>

    
        </Form>
        </section>

      )};
     


   

    LoginForm.propTypes = {
      mail: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      changeField: PropTypes.func.isRequired,
      handleLogin: PropTypes.func.isRequired,
      handleLogout: PropTypes.func.isRequired,
      isLogged: PropTypes.bool,
      loggedMessage: PropTypes.string,
    };
    
    

export default LoginForm;