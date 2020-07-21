import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';

function Register({ signUp }) {
  const onSubmit = (formData) => {
    signUp(formData);
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
        <Translate value="Register.title" />
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
            pattern: '[a-zA-Z0-9-]+',
            minLength: '4',
            maxLength: '10',
            title: 'Username must be 4-10 alphanumeric characters (no spaces)',
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
          <Translate value="Register.submit" />
        </Button>
      </Form>

      <Link to="/login">
        <button type="button">
          <Translate value="Register.cancel" />
        </button>
      </Link>
    </div>
  );
}
export default withRouter(Register);
