import React, { useEffect, useCallback, useState } from 'react';
import './Home.css';

import AdsGrid from '../adsgrid/AdsGrid';
import Navbar from '../navbar/connectedNavbar';
import Filter from './Filter';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAds } from '../../store/actions';
import config from '../../config';

const { AD_LIMIT_PER_PAGE } = config;
const _ = require('lodash');

const createURLQuery = (params) => {
  if (params.min || params.max) params.price = `${params.min}-${params.max}`;

  params = _.omit(params, 'max', 'min');
  params = _.omitBy(params, _.isEmpty);

  const url = new URL(config.ADS);
  url.search = new URLSearchParams(params);
  return url;
};

function Home() {
  const ads = useSelector((store) => store.ads);
  const type = 'public';
  const initialValue = {
    name: '',
    tag: '',
    min: '',
    max: '',
    sale: '',
    limit: AD_LIMIT_PER_PAGE,
    skip: '0',
    filterIsChanged: false,
  };
  const [query, setQuery] = useState(createURLQuery(initialValue));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds(query));
  }, [dispatch, query]);

  const onSubmit = useCallback((formData) => {
    const newQuery = createURLQuery(formData);
    setQuery(newQuery);
  }, []);
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Filter
        adsLength={ads.length}
        initialValue={initialValue}
        onSubmit={onSubmit}
      ></Filter>
      <AdsGrid ads={ads} type={type}></AdsGrid>
    </div>
  );
}
export default Home;
