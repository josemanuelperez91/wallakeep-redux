import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';

export default function Filter({ initialValue, onSubmit, adsLength }) {
  const [formData, setFormData] = useState({
    ...initialValue,
  });

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
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      onSubmit(formData);
    }
  }, [formData.skip, onSubmit, formData]);

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

  const tags = [];
  const loadedTags = tags.filter((tag) => tag);

  const page = formData.skip
    ? (Number(formData.skip) + 15) / formData.limit
    : 1;

  return (
    <form className="Filter" onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleInput}
        placeholder="Name"
        type="text"
      />
      <input
        onChange={handleInput}
        name="min"
        type="number"
        placeholder="min price"
        max={formData.max}
      />
      <input
        onChange={handleInput}
        name="max"
        type="number"
        placeholder="max price"
        min={formData.min}
      />
      <label>
        Sell
        <input value="true" onChange={handleInput} name="sale" type="radio" />
      </label>
      <label>
        Buy
        <input value="false" onChange={handleInput} name="sale" type="radio" />
      </label>
      <label>
        All
        <input
          value=""
          onChange={handleInput}
          name="sale"
          type="radio"
          defaultChecked={true}
        />
      </label>
      <select defaultValue={loadedTags[0]} onChange={handleInput} name="tag">
        <option key={null} value={''}>
          {'Select a Tag'}
        </option>
        {loadedTags.map((tag) => {
          return (
            <option key={tag} value={tag ? tag : ''}>
              {tag}
            </option>
          );
        })}
      </select>
      <button id="filterButton">Filter</button>

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
        disabled={adsLength > 15 || formData.filterIsChanged ? 'disabled' : ''}
        onClick={nextPage}
        type="button"
      >
        Next
      </button>
    </form>
  );
}
