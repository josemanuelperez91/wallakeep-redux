import React, { useEffect } from 'react';
import './Edit.css';

import Form from '../form/Form';
import Editor from './Editor';

import { Translate } from 'react-redux-i18n';

import Navbar from '../navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags } from '../../store/actions';

export default function Create({ createAd }) {
  const username = useSelector((store) => store.login.username);

  const onSubmit = (adData) => {
    createAd(adData, username);
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
    dispatch(fetchTags({ all: true }));
  }, [dispatch]);
  return (
    <div className="Edit">
      <Navbar></Navbar>
      <h1>
        <Translate value={'Create.title'}></Translate>
      </h1>
      <Form onSubmit={onSubmit} initialValue={initialValue}>
        <Editor availableTags={tags}></Editor>
      </Form>
    </div>
  );
}
