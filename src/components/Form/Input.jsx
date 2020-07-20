import React, { useContext } from 'react';
import FormContext from './FormContext';

export default function Input({
  name,
  placeholder,
  type,
  otherProps,
  template,
}) {
  const { handleChange, handleFile, formData } = useContext(FormContext);

  function handleFileSelect(evt) {
    const file = evt.target.files[0];
    const fileURL = window.URL.createObjectURL(file);
    const reader = new FileReader();
    const name = evt.target.name;
    reader.onloadend = function () {
      handleFile(name, reader.result);
    };
    reader.readAsDataURL(file);

    evt.target.style.backgroundImage = 'url(' + fileURL + ')';
  }

  switch (template) {
    case 'textarea':
      return (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          defaultValue={formData[name]}
          {...otherProps}
        ></textarea>
      );
    case 'radio':
      return (
        <input
          type="radio"
          name={name}
          onChange={handleChange}
          defaultChecked={formData[name] === otherProps.radioValue}
          value={formData[name]}
        ></input>
      );
    case 'imageFile':
      return (
        <input
          style={{
            backgroundImage: 'url(' + formData[name] + ')',
          }}
          type="file"
          name={name}
          onChange={handleFileSelect}
          {...otherProps}
        ></input>
      );
    default:
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
}
