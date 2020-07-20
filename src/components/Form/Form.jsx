import React, { useState } from 'react';
import FormContext from './FormContext';

export default function Form({ initialValue, onSubmit, children }) {
  const [formData, setFormData] = useState({
    ...initialValue,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleFile = (name, encodedFile) => {
    setFormData({ ...formData, [name]: encodedFile });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={{ handleChange, handleFile, formData }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}
