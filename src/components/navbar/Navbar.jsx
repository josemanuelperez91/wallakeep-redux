import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

export default function Navbar({ signOut, username }) {
  return (
    <nav>
      <button id="signOut" onClick={signOut}>
        Sign Out
      </button>
      <Link to={'/users/' + username}>
        <button id="my-ads">
          <Translate value="Home.myAds"></Translate>
        </button>
      </Link>

      <button id="user">{username}</button>
    </nav>
  );
}
