import React, { useEffect } from 'react';
import './Edit.css';

import Form from '../form/Form';
import Editor from './Editor';
import sha256 from 'crypto-js/sha256';

import { Translate } from 'react-redux-i18n';
import firebase from '../../config/firebase';

import Navbar from '../navbar/connectedNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags } from '../../store/actions';

const _ = require('lodash');

const storage = firebase.storage();
const storageRef = storage.ref();

export default function Create({ createAd }) {
  const onSubmit = (adData) => {
    const imageName = sha256(adData.image);
    const imagesRef = storageRef.child('images/' + imageName);
    const imageUpload = imagesRef.putString(adData.image, 'data_url');
    imageUpload.on(
      'state_changed',
      function (snapshot) {
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      },
      function (error) {
        console.error(error);
      },
      function () {
        imageUpload.snapshot.ref.getDownloadURL().then(function (imageURL) {
          const { name, price, description, sale, tags } = adData;
          createAd({ name, price, description, sale, tags, image: imageURL });
        });
      }
    );
  };

  const initialValue = {
    name: '',
    price: '',
    description: '',
    tags: [],
    sale: true,
    image: '',
  };
  const tags = useSelector((store) => store.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    <div className="Edit">
      <Navbar></Navbar>
      <h1>Create</h1>
      <Form onSubmit={onSubmit} initialValue={initialValue}>
        <Editor availableTags={tags}></Editor>
      </Form>
    </div>
  );
}
