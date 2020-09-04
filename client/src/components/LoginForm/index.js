import React, { useState, useEffect } from "react";
import Field from "../../containers/Field";
import { Link } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";
import { Button, Form, Icon } from "semantic-ui-react";
import logo from "../../assets/images/IMG_2009.png";

const LoginForm = ({
  mail,
  password,
  changeField,
  handleLogin,
  handleLogout,
  loggedMessage,
  isLogged,
  history,
}) => {
  const [Eye, setEye] = useState(false);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => history.push("/"), 2000);
    }
  }, [isLogged]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <section className="login">
      <div id="mainTitle">
        <img style={{ width: 250, height: 250 }} src={logo} />
      </div>

      <h1 className="ui dark header">Identifiants de connexion</h1>
      {loggedMessage ? <span>{loggedMessage}</span> : null}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Adresse mail</label>
          <Field
            required="true"
            name="mailLogin"
            reducerName="user"
            placeholder="Adresse Email"
            id="bg"
          />
        </Form.Field>

        <Form.Field required>
          <label>Mot de passe</label>

          <Icon name="eye" onClick={
            () => setEye(!Eye)
          }/>

          <Field
            id="bg"
            name="passwordLogin"
            reducerName="user"
            required="true"
            placeholder="Mot de Passe"
            type={Eye ? "text" : "password"}
          />
        </Form.Field>

        <div className="btn">
          <span className="validation-btn">
            <Button className="ui blue button">Validez</Button>
          </span>
          <span>
            <Link button="true" className="ui grey button" to="/">
              Annuler
            </Link>
          </span>
        </div>
      </Form>
    </section>
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
