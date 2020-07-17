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
        <h2>{props.data.name}</h2>
        <p className={props.data.type}>{props.data.price} €</p>
        <img alt={props.data.name} src={props.data.photo} />
      </Link>
      <button>
        <Link to={'update/' + props.data._id}>Update</Link>
      </button>
    </div>
  );
};
export default Ad;
