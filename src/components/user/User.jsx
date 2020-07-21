import React, { useEffect, useRef } from 'react';
import './User.css';

import AdsGrid from '../adsgrid/AdsGrid';
import Navbar from '../navbar';

import { Link } from 'react-router-dom';
import config from '../../config';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAds } from '../../store/actions';

function User({
  match: {
    params: { username },
  },
}) {
  const ads = useSelector((store) => store.ads);
  const currentUser = useSelector((store) => store.login.username);
  const currentIsLoggedIn = useSelector((store) => store.login.isLoggedIn);

  const dispatch = useDispatch();
  let type = 'user';
  if (currentIsLoggedIn && currentUser === username) {
    type = 'private';
  }
  const defaultFilter = useRef({
    limit: config.AD_LIMIT_PER_PAGE,
  });

  useEffect(() => {
    dispatch(fetchUserAds(username, defaultFilter.current));
  }, [dispatch, username, defaultFilter]);

  return (
    <div className="User">
      <Navbar></Navbar>
      <h1>{username} Ads</h1>
      {type === 'private' && (
        <button id="createAd" className="greenButton">
          <Link to="/create">New Ad</Link>
        </button>
      )}

      <AdsGrid ads={ads} type={type}></AdsGrid>
    </div>
  );
}
export default User;
