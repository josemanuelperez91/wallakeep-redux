import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';

function Login({ signIn }) {
  const onSubmit = (formData) => {
    signIn(formData);
  };
  return (
    <div className="Login">
      <h1>
        <Translate value="Login.Title" />
      </h1>
      <Form initialValue={{ username: '', password: '' }} onSubmit={onSubmit}>
        <Translate value="Login.usernameInputPlaceholder" />
        <Input
          type="text"
          name="username"
          otherProps={{
            required: true,
          }}
        ></Input>
        <Translate value="Login.passwordInputPlaceholder" />
        <Input
          type="password"
          name="password"
          otherProps={{
            required: true,
            autoComplete: 'password',
          }}
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
      {/* <Link to="/recovery">
        <button className="redButton" type="button">
          <Translate value="Login.Forgot" />
        </button>
      </Link> */}
    </div>
  );
}
export default withRouter(Login);
