import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';

//Para el navbar de idiomas
import config from '../../config';

const { SUPPORTED_LOCALES } = config;

function Login({ signIn, changeLocale }) {
  const onSubmit = (formData) => {
    signIn(formData);
  };
  const handleChangeLocale = (event, newLocale) => {
    event.preventDefault();
    changeLocale(newLocale);
  };
  return (
    <div className="Login">
      <h1>
        <Translate value="Login.Title" />
      </h1>
      <Form initialValue={{ username: '', password: '' }} onSubmit={onSubmit}>
        <Translate value="Login.usernameInputPlaceholder" />
        <Input type="text" name="username"></Input>
        <Translate value="Login.passwordInputPlaceholder" />
        <Input type="password" name="password"></Input>
        <Button className="greenButton" type="submit">
          <Translate value="Login.Submit" />
        </Button>
      </Form>

      <Link to="/register">
        <button type="button">
          <Translate value="Login.Cancel" />
        </button>
      </Link>
      {/* <Link to="/recovery">
        <button className="redButton" type="button">
          <Translate value="Login.Forgot" />
        </button>
      </Link> */}

      <footer>
        <ul>
          {SUPPORTED_LOCALES.map((locale) => {
            return (
              <li key={locale}>
                <div
                  className="link"
                  onClick={(event) => handleChangeLocale(event, locale)}
                >
                  {locale}
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
export default withRouter(Login);
