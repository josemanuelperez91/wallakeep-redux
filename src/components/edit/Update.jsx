import React, { useEffect } from 'react';
import './Edit.css';

import Form from '../form/Form';
import Editor from './Editor';

import { Translate } from 'react-redux-i18n';

import Navbar from '../navbar';
import { useSelector, useDispatch } from 'react-redux';
import { getAdDetails, fetchTags } from '../../store/actions';

const _ = require('lodash');

export default function Update({
  updateAd,
  deleteAd,
  match: {
    params: { ID },
  },
  adDetails,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdDetails(ID));
  }, [dispatch, ID]);

  useEffect(() => {
    dispatch(fetchTags({ all: true }));
  }, [dispatch]);

  const onSubmit = (adData) => {
    updateAd(adData);
  };

  const tags = useSelector((store) => store.tags);

  const onDelete = () => {
    const confirmDelete = window.confirm('Delete this Ad?');

    if (confirmDelete) {
      deleteAd();
    }
  };
  if (!_.isEmpty(adDetails)) {
    return (
      <div className="Edit">
        <Navbar></Navbar>
        <h1>
          <Translate value="Update.title"></Translate>
        </h1>
        <Form onSubmit={onSubmit} initialValue={adDetails}>
          <Editor availableTags={tags} />
        </Form>
        <button id="Delete" onClick={onDelete}>
          <Translate value="Update.delete"></Translate>
        </button>
      </div>
    );
  } else {
    return <div className="Detail">LOADING AD...</div>;
  }
}
