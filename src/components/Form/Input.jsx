import React, { useContext } from 'react';
import FormContext from './FormContext';

export default function Input({
  name,
  placeholder,
  type,
  otherProps,
  template,
}) {
  const { handleChange, handleFile, handleSelect, formData } = useContext(
    FormContext
  );

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

  function handleSelection(evt) {
    handleSelect(
      evt.target.name,
      Array.from(evt.target.selectedOptions, (item) => item.value)
    );
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
          required={otherProps.required}
          value={otherProps.radioValue}
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
          required={formData[name] ? '' : 'required'}
          {...otherProps}
        ></input>
      );
    case 'selector':
      return (
        <select
          onChange={handleSelection}
          name={name}
          value={
            formData[name] && formData[name].map((selectable) => selectable)
          }
          multiple={otherProps.multiple}
          required={otherProps.required}
        >
          <option key={null} disabled="disabled" value="">
            {otherProps.defaultValue}
          </option>

          {otherProps.availables &&
            otherProps.availables.map((available) => {
              return (
                <option key={available} value={available}>
                  {available}
                </option>
              );
            })}
        </select>
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
