import React from 'react';
import './Ad.css';
import { Link } from 'react-router-dom';
import urlSlug from 'url-slug';
import { Translate } from 'react-redux-i18n';

const Ad = ({ data: { name, _id, price, image, sale } }) => {
  const sluggedUrl = urlSlug(name);
  const fullUrl = _id + '-' + sluggedUrl;
  return (
    <div className="ListAd">
      <Link to={'/detail/' + fullUrl}>
        <table className={sale ? 'sell' : 'buy'}>
          <tbody>
            <tr>
              <td>
                <img alt={name} src={image} />
              </td>
              <td>
                <h2>{name}</h2>
              </td>
              <td>{price} €</td>
            </tr>
          </tbody>
        </table>
      </Link>
      <div className={'action-button'}>
        <Link to={'/update/' + _id}>
          <button>
            <Translate value="User.update" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Ad;
