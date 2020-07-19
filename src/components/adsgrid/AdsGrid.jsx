import React from 'react';
import PublicAd from './PublicAd';
import PublicUserAd from './PublicUserAd';
import PrivateAd from './PrivateAd';

import './AdsGrid.css';

export default function AdsGrid({ ads, type }) {
  const GridFiller = () => {
    return ads.map((ad) => {
      if (ads !== null) {
        switch (type) {
          case 'public':
            return <PublicAd key={ad._id} data={ad}></PublicAd>;
          case 'private':
            return <PrivateAd key={ad._id} data={ad}></PrivateAd>;
          case 'user':
            return <PublicUserAd key={ad._id} data={ad}></PublicUserAd>;
          default:
            return null;
        }
      } else {
        return <div className="AdsGrid">LOADING ADS...</div>;
      }
    });
  };
  return (
    <div className="AdsGrid">
      <GridFiller></GridFiller>
    </div>
  );
}
