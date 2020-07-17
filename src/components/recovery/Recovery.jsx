import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';

import config from '../../config';

const { SUPPORTED_LOCALES } = config;

function Recovery({ recoverPass, changeLocale }) {
  const onSubmit = (formData) => {
    recoverPass(formData);
  };
  const handleChangeLocale = (event, newLocale) => {
    event.preventDefault();
    changeLocale(newLocale);
  };

  return (
    <div className="Recovery">
      <h1>
        <Translate value="Recovery.Title" />
      </h1>
      <Form
        initialValue={{
          email: '',
        }}
        onSubmit={onSubmit}
      >
        <Translate value="Register.emailInputPlaceholder" />
        <Input
          type="email"
          otherProps={{
            required: true,
          }}
          name="email"
        ></Input>

        <Button className="greenButton" type="submit">
          <Translate value="Recovery.Submit" />
        </Button>
      </Form>

      <Link to="/login">
        <button type="button">
          <Translate value="Recovery.Cancel" />
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
export default withRouter(Recovery);
