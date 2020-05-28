import React from 'react';
import './Navbar.css';

export default function Navbar({ signOut }) {
  return (
    <button id="signOut" onClick={signOut}>
      Sign Out
    </button>
  );
}
