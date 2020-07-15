import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate, I18n } from 'react-redux-i18n';

import Form from '../Form/Form';
import Input from '../Form/Input';
import Button from '../Form/Button';

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
        <Input
          type="text"
          name="username"
          placeholder={I18n.t('Login.usernameInputPlaceholder')}
        ></Input>
        <Input
          type="password"
          name="password"
          placeholder={I18n.t('Login.passwordInputPlaceholder')}
        ></Input>
        <Button className="greenButton" type="submit">
          <Translate value="Login.Submit" />
        </Button>
      </Form>

      <Link to="/register">
        <button type="button">
          <Translate value="Login.Cancel" />
        </button>
      </Link>

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
