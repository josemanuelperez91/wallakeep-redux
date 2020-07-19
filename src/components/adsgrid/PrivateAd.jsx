import React from 'react';
import './Ad.css';
import { Link } from 'react-router-dom';
import urlSlug from 'url-slug';

const Ad = ({ data: { name, _id, type, price, image } }) => {
  const sluggedUrl = urlSlug(name);
  const fullUrl = _id + '-' + sluggedUrl;
  return (
    <div className="Ad">
      <Link to={'detail/' + fullUrl}>
        <h2>{name}</h2>
        <p className={type}>{price} €</p>
        <img alt={name} src={image} />
      </Link>

      <Link to={'/update/' + _id}>
        <button>Update</button>
      </Link>
    </div>
  );
};
export default Ad;
