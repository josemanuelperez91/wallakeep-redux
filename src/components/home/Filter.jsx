import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags } from '../../store/actions';
import { Translate, I18n } from 'react-redux-i18n';

export default function Filter({ initialValue, onSubmit, adsLength }) {
  const [formData, setFormData] = useState({
    ...initialValue,
  });
  const tags = useSelector((store) => store.tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  const previousPage = () => {
    let currentSkip = formData.skip;
    currentSkip = Number(currentSkip) - 15;

    if (currentSkip <= 0) {
      currentSkip = '0';
    }
    setFormData({
      ...formData,
      skip: String(currentSkip),
    });
  };

  const nextPage = () => {
    let currentSkip = formData.skip;
    currentSkip = Number(currentSkip) + 15;
    setFormData({
      ...formData,
      skip: String(currentSkip),
    });
  };
  const running = useRef(true);

  useEffect(() => {
    if (running.current) {
      running.current = false;
    } else {
      onSubmit(formData);
    }
  }, [onSubmit, formData]);

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      filterIsChanged: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, skip: '', filterIsChanged: false });
    onSubmit(formData);
  };

  const page = formData.skip
    ? (Number(formData.skip) + 15) / formData.limit
    : 1;

  return (
    <form className="Filter" onSubmit={handleSubmit}>
      <Translate value="AdEditor.name"></Translate>
      <input name="name" onChange={handleInput} type="text" />
      <Translate value="AdFilter.minprice"></Translate>
      <input
        onChange={handleInput}
        name="min"
        type="number"
        max={formData.max}
      />
      <Translate value="AdFilter.maxprice"></Translate>
      <input
        onChange={handleInput}
        name="max"
        type="number"
        min={formData.min}
      />
      <label>
        <Translate value="AdEditor.sell" />
        <input value="true" onChange={handleInput} name="sale" type="radio" />
      </label>
      <label>
        <Translate value="AdEditor.buy" />
        <input value="false" onChange={handleInput} name="sale" type="radio" />
      </label>
      <label>
        <Translate value="AdFilter.all" />

        <input
          value=""
          onChange={handleInput}
          name="sale"
          type="radio"
          defaultChecked={true}
        />
      </label>
      <select defaultValue={tags[0]} onChange={handleInput} name="tag">
        <option key={null} value={''}>
          {I18n.t('AdEditor.selecttag')}
        </option>
        {tags.map((tag) => {
          return (
            <option key={tag} value={tag ? tag : ''}>
              {tag}
            </option>
          );
        })}
      </select>

      <button
        className="pagination"
        disabled={
          Number(formData.skip) > 0 && !formData.filterIsChanged
            ? ''
            : 'disabled'
        }
        onClick={previousPage}
        type="button"
      >
        Previous
      </button>
      <div className="pagination ">Page: {page}</div>
      <button
        className="pagination"
        disabled={adsLength < 15 || formData.filterIsChanged ? 'disabled' : ''}
        onClick={nextPage}
        type="button"
      >
        Next
      </button>
    </form>
  );
}
