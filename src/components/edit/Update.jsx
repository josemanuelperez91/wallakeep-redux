import React, { useEffect } from 'react';
import './Edit.css';

import Form from '../form/Form';
import Editor from './Editor';

import { Translate } from 'react-redux-i18n';

import Navbar from '../navbar/connectedNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { getAdDetails, fetchTags } from '../../store/actions';
import firebase from '../../config/firebaseStore';

const _ = require('lodash');

const storage = firebase.storage();
const storageRef = storage.ref();

export default function Update({
  updateAd,
  deleteAd,
  match: {
    params: { ID },
  },
}) {
  const onSubmit = (adData) => {
    if (adData.image.startsWith('data:')) {
      const imagesRef = storageRef.child('images/' + ID);
      const imageUpload = imagesRef.putString(adData.image, 'data_url');
      imageUpload.on(
        'state_changed',
        function (snapshot) {},
        function (error) {
          console.error(error);
        },
        function () {
          imageUpload.snapshot.ref.getDownloadURL().then(function (imageURL) {
            const { name, price, description, sale, tags } = adData;
            updateAd({ name, price, description, sale, tags, image: imageURL });
          });
        }
      );
    } else {
      const { name, price, description, sale, tags, image } = adData;
      updateAd({ name, price, description, sale, tags, image });
    }
  };

  const adDetails = useSelector((store) => store.adDetails);
  const tags = useSelector((store) => store.tags);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdDetails(ID));
  }, [dispatch, ID]);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const initialValue = { ...adDetails };

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
        <Form onSubmit={onSubmit} initialValue={initialValue}>
          <Editor availableTags={tags} />
        </Form>
        <button id="Delete" onClick={onDelete}>
          <Translate value="Update.deleteButton"></Translate>
        </button>
      </div>
    );
  } else {
    return <div className="Detail">LOADING AD...</div>;
  }
}
