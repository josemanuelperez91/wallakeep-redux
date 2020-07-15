import React, { useContext } from 'react';
import FormContext from './FormContext';

export default function Input({ name, placeholder, type, otherProps }) {
  const { handleChange, formData } = useContext(FormContext);

  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      value={formData[name]}
      {...otherProps}
    />
  );
}
