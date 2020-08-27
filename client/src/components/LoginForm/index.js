import React from 'react';
import Field from '../../containers/Field';
import './style.scss';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form } from 'semantic-ui-react'

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
     <div className="toutcon">
     <div className="container" >
      <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
         
      )}
      {!isLogged && (
        
        
           
        <form autoComplete="off" className="login-box" onSubmit={handleSubmit}>
          
          <div className="text-box">
            <i className="fa fa-user" aria-hidden="true"></i>
          <Field 
            name="mailLogin"
            reducerName="user"
            placeholder="Adresse Email"

          />
          </div>
      
          <div className="text-box">
          <i className="fa fa-lock" aria-hidden="true"></i>
            <Field
            
            name="passwordLogin"
            reducerName="user"
            type="password"
            placeholder="Mot de Passe"

          />
            </div>    
         
          <div className="btn">
            
            <input type="submit"
            className="btn"
            name=""
            value="se connecter">

            </input>
           
          </div>
         
        </form>

      )}
      </div>
      </div>
      </div>
);

    };

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