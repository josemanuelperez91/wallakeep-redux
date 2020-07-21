import React from 'react';
import config from '../../config';
import './Footer.css';
const { SUPPORTED_LOCALES } = config;

export default function Footer({ changeLocale }) {
  const handleChangeLocale = (event, newLocale) => {
    event.preventDefault();
    changeLocale(newLocale);
  };

  return (
    <div className={'Footer'}>
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
