import React from 'react';
import PublicAd from './PublicAd';
import PublicUserAd from './PublicUserAd';
import PrivateAd from './PrivateAd';

import './AdsGrid.css';

export default function AdsGrid({ ads, type }) {
  function PublicGrid() {
    return ads.map((ad) => {
      return <PublicAd key={ad._id} data={ad}></PublicAd>;
    });
  }
  function PrivateGrid() {
    return ads.map((ad) => {
      return <PrivateAd key={ad._id} data={ad}></PrivateAd>;
    });
  }
  function PublicUserAdGrid() {
    return ads.map((ad) => {
      return <PublicUserAd key={ad._id} data={ad}></PublicUserAd>;
    });
  }
  if (ads !== null) {
    switch (type) {
      case 'public':
        return (
          <div className="AdsGrid">
            <PublicGrid></PublicGrid>
          </div>
        );
      case 'private':
        return (
          <div className="AdsGridList">
            <PrivateGrid></PrivateGrid>
          </div>
        );
      case 'user':
        return (
          <div className="AdsGrid">
            <PublicUserAdGrid></PublicUserAdGrid>
          </div>
        );
      default:
        return null;
    }
  } else {
    return <div className="AdsGrid">LOADING ADS...</div>;
  }
}
