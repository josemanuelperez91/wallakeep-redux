import React from 'react';
import { Redirect } from 'react-router';

import { useSelector } from 'react-redux';

function MyAccount() {
  const currentUser = useSelector((store) => store.login.username);

  return <Redirect to={`/users/${currentUser}`} />;
}
export default MyAccount;
