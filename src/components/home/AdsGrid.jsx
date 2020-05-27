import React from 'react';
import Ad from './Ad';
import './AdsGrid.css';

export default function AdsGrid({ ads }) {
  if (ads !== null) {
    return (
      <div className="AdsGrid">
        {ads.map((ad) => {
          return <Ad key={ad._id} data={ad}></Ad>;
        })}
      </div>
    );
  } else {
    return <div className="AdsGrid">LOADING ADS...</div>;
  }
}
