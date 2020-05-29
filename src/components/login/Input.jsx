import React, { useContext } from 'react';
import FormContext from './FormContext';

export default function Input({ name, placeholder, type }) {
  const handleChange = useContext(FormContext);

  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
    />
  );
}
