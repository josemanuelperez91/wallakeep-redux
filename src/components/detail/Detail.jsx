import React, { useEffect } from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAdDetails } from '../../store/actions';
const _ = require('lodash');
function Detail({
  match: {
    params: { ID },
  },
}) {
  const adDetails = useSelector((store) => store.adDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdDetails(ID));
  }, [dispatch, ID]);

  if (!_.isEmpty(adDetails)) {
    return (
      <div className="Detail">
        <h1>{adDetails.name}</h1>
        <img alt={adDetails.name} src={adDetails.photo} />
        <p>Type: {adDetails.sale ? 'Sale' : 'Purchase'}</p>
        <p>Price: {adDetails.price} €</p>
        <p id="description">{adDetails.description}</p>
        Tags:
        <ul>
          {adDetails.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        <p>Author: {adDetails.username}</p>
        <button>
          <Link to="/home">Back</Link>
        </button>
      </div>
    );
  } else {
    return <div className="Detail">LOADING AD...</div>;
  }
}

export default Detail;
