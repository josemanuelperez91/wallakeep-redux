import React, { useEffect, useState } from 'react';
import './Detail.css';
import { getAdDetails } from '../../services/API';
import { Link } from 'react-router-dom';
const _ = require('lodash');

export default function Detail({
  match: {
    params: { ID },
  },
}) {
  const [adData, setAdData] = useState('');

  useEffect(() => {
    getAdDetails(ID).then((response) => {
      if (response.success) {
        setAdData(response.result);
      } else {
        console.error(response.error);
      }
    });
  }, [ID]);

  if (!_.isEmpty(adData)) {
    const createDate = new Date(adData.createdAt).toLocaleString();
    const updateDate = new Date(adData.updatedAt).toLocaleString();

    return (
      <div className="Detail">
        <h1>{adData.name}</h1>
        <img alt={adData.name} src={adData.photo} />
        <p>Type: {adData.type}</p>
        <p>Price: {adData.price} €</p>
        <p id="description">{adData.description}</p>
        Tags:
        <ul>
          {adData.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        <p>Created: {createDate}</p>
        <p>Last update: {updateDate}</p>
        <button>
          <Link to="/home">Back</Link>
        </button>
      </div>
    );
  } else {
    return <div className="Detail">LOADING AD...</div>;
  }
}
