import React, { useEffect } from 'react';
import './Edit.css';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';
import { Translate } from 'react-redux-i18n';

import Navbar from '../navbar/connectedNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { getAdDetails } from '../../store/actions';
import firebase from 'firebase';

const _ = require('lodash');

const firebaseConfig = {
  apiKey: 'AIzaSyCj7ZTT6Ovdl8t7sP0Hy_zbha7CIziQ3tk',
  authDomain: 'wallaclone-281617.firebaseapp.com',
  databaseURL: 'https://wallaclone-281617.firebaseio.com',
  projectId: 'wallaclone-281617',
  storageBucket: 'wallaclone-281617.appspot.com',
  messagingSenderId: '714174297993',
  appId: '1:714174297993:web:99388c7cf09bc47d31d358',
  measurementId: 'G-2WHFZXYMMP',
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

var imagesRef = storageRef.child('images');
export default function Update({
  updateAd,
  match: {
    params: { ID },
  },
}) {
  const onSubmit = (adData) => {
    console.log(adData.image);
    imagesRef.putString(adData.image, 'data_url').then(function (snapshot) {
      console.log('Uploaded a data_url string!');
    });
    const { name, price, description, sale } = adData;

    updateAd({ name, price, description, sale });
  };
  const adDetails = useSelector((store) => store.adDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdDetails(ID));
  }, [dispatch, ID]);

  const initialValue = { ...adDetails };

  if (!_.isEmpty(adDetails)) {
    return (
      <div className="Edit">
        <Navbar></Navbar>
        <h1>Update</h1>
        <Form onSubmit={onSubmit} initialValue={initialValue}>
          <Input
            name="image"
            template="imageFile"
            otherProps={{
              accept: 'image/png, image/jpeg',
              className: 'imageFile',
            }}
          />
          <Translate value="AdEditor.name" />
          <Input
            type="text"
            otherProps={{
              required: true,
              pattern: '[a-zA-Z0-9 ]+',
              minLength: '3',
              maxLength: '36',
              title:
                'Ad title must be 3-36 alphanumeric characters (with spaces)',
            }}
            name="name"
          ></Input>

          <Translate value="AdEditor.price" />
          <Input
            otherProps={{
              required: true,
            }}
            type="number"
            name="price"
          ></Input>

          <Translate value="AdEditor.description" />
          <Input template="textarea" name="description"></Input>
          <Translate value="AdEditor.TypeofAd" />
          <div>
            <label>
              <Translate value="AdEditor.Buy" />
              <Input
                name="sale"
                template="radio"
                otherProps={{
                  radioValue: false,
                }}
              />
            </label>
            <label>
              <Translate value="AdEditor.Sell" />
              <Input
                name="sale"
                otherProps={{
                  radioValue: true,
                }}
                template="radio"
              />
            </label>
          </div>
          <Button className="greenButton" type="submit">
            <Translate value="AdEditor.Submit" />
          </Button>
        </Form>
      </div>
    );
  } else {
    return <div className="Detail">LOADING AD...</div>;
  }
}
