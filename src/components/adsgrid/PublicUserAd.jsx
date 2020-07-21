import React from 'react';
import './Ad.css';
import { Link } from 'react-router-dom';
import urlSlug from 'url-slug';

const Ad = (props) => {
  const sluggedUrl = urlSlug(props.data.name);
  const fullUrl = props.data._id + '-' + sluggedUrl;

  return (
    <div className="Ad">
      <Link to={'detail/' + fullUrl}>
        <div className={props.data.sale ? 'sell' : 'buy'}>
          <h2>{props.data.name}</h2>
          <p>{props.data.price} €</p>
          <img alt={props.data.name} src={props.data.image} />
        </div>
      </Link>
    </div>
  );
};
export default Ad;
