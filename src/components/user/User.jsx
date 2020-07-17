import React, { useEffect, useCallback, useState } from 'react';
import './User.css';

import AdsGrid from '../adsgrid/AdsGrid';
import Navbar from '../navbar/connectedNavbar';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAds } from '../../store/actions';

const _ = require('lodash');

function User() {
  const ads = useSelector((store) => store.ads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAds(username));
  }, [dispatch, username]);

  return (
    <div className="User">
      <Navbar></Navbar>
      <Filter
        adsLength={ads.length}
        initialValue={initialValue}
        onSubmit={onSubmit}
      ></Filter>
      <button id="createAd" className="greenButton">
        <Link to="create">New Ad</Link>
      </button>
      <AdsGrid ads={ads}></AdsGrid>
    </div>
  );
}
export default User;
