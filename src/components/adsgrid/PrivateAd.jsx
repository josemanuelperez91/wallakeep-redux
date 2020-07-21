import React from 'react';
import './Ad.css';
import { Link } from 'react-router-dom';
import urlSlug from 'url-slug';
import { Translate } from 'react-redux-i18n';

const Ad = ({ data: { name, _id, type, price, image, sale } }) => {
  const sluggedUrl = urlSlug(name);
  const fullUrl = _id + '-' + sluggedUrl;
  return (
    <div className="Ad">
      <div className={sale ? 'sell' : 'buy'}>
        <Link to={'/detail/' + fullUrl}>
          <h2>{name}</h2>
          <p className={type}>{price} €</p>
          <img alt={name} src={image} />
        </Link>
      </div>
      <Link to={'/update/' + _id}>
        <button>
          <Translate value="User.update" />
        </button>
      </Link>
    </div>
  );
};
export default Ad;
