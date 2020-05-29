import React, { useState, createContext } from 'react';
import FormContext from './FormContext';

export default function Form({ initialValue, onSubmit, children }) {
  const [formData, setFormData] = useState({
    ...initialValue,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={handleChange}>
        {children}
      </FormContext.Provider>
    </form>
  );
}
