import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import Form from '../Form/Form';
import Input from '../Form/Input';
import Button from '../Form/Button';

//Para el navbar de idiomas
import config from '../../config';

const { SUPPORTED_LOCALES } = config;

function Register({ signUp, changeLocale }) {
  const onSubmit = (formData) => {
    signUp(formData);
  };
  const handleChangeLocale = (event, newLocale) => {
    event.preventDefault();
    changeLocale(newLocale);
  };

  const checkRepeatPassword = () => {
    const checkElement = document.querySelector('input[name=password]');
    const verifyElement = document.querySelector('input[name=repeatPassword]');

    if (checkElement.value !== verifyElement.value) {
      verifyElement.setCustomValidity('Passwords must match');
    } else {
      verifyElement.setCustomValidity('');
    }
  };

  return (
    <div className="Register">
      <h1>
        <Translate value="Register.Title" />
      </h1>
      <Form
        initialValue={{
          username: '',
          password: '',
          email: '',
          repeatPassword: '',
        }}
        onSubmit={onSubmit}
      >
        <Translate value="Register.usernameInputPlaceholder" />
        <Input
          type="text"
          otherProps={{
            required: true,
          }}
          name="username"
        ></Input>
        <Translate value="Register.emailInputPlaceholder" />
        <Input
          otherProps={{
            required: true,
          }}
          type="email"
          name="email"
        ></Input>
        <Translate value="Register.passwordInputPlaceholder" />
        <Input
          otherProps={{
            required: true,
            autoComplete: 'password',
          }}
          type="password"
          name="password"
        ></Input>
        <Translate value="Register.passwordRInputPlaceholder" />
        <Input
          otherProps={{
            required: true,
            autoComplete: 'password',
            onInput: checkRepeatPassword,
          }}
          type="password"
          name="repeatPassword"
        ></Input>
        <Button className="greenButton" type="submit">
          <Translate value="Register.Submit" />
        </Button>
      </Form>

      <Link to="/login">
        <button type="button">
          <Translate value="Register.Cancel" />
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
export default withRouter(Register);
