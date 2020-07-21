import React, { useEffect } from 'react';
import './Detail.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAdDetails } from '../../store/actions';
import Navbar from '../navbar';
import { Translate } from 'react-redux-i18n';

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
        <Navbar></Navbar>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td rowSpan={3}>
                <img alt={adDetails.name} src={adDetails.image} />
              </td>
              <td colSpan={3}>
                <h1>{adDetails.name}</h1>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <Translate value="AdEditor.description"></Translate>:
                <p id="description">{adDetails.description}</p>
              </td>
            </tr>
            <tr>
              <td>
                <Translate value="AdEditor.type"></Translate>:{' '}
                <p>{adDetails.sale ? 'Sale' : 'Purchase'}</p>
              </td>
              <td>
                <Translate value="AdEditor.price"></Translate>:
                <p>{adDetails.price} €</p>
              </td>

              <td>
                <Translate value="AdEditor.tags"></Translate>:
                <ul>
                  {adDetails.tags.map((tag) => {
                    return <li key={tag}>{tag}</li>;
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <Translate value="AdDetail.publishedBy"></Translate>:{' '}
        <a id="publisher" href={'/users/' + adDetails.username}>
          {adDetails.username}
        </a>
      </div>
    );
  } else {
    return <div className="Detail">LOADING AD...</div>;
  }
}

export default Detail;
