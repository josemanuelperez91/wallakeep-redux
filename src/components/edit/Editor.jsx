import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import { Translate } from 'react-redux-i18n';

export default function Editor({ availableTags }) {
  return (
    <div>
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
          title: 'Ad title must be 3-36 alphanumeric characters (with spaces)',
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
      <Input
        template="textarea"
        name="description"
        otherProps={{
          required: true,
        }}
      ></Input>
      <Translate value="AdEditor.tags" />
      <Input
        template="selector"
        otherProps={{
          multiple: 'multiple',
          required: true,
          availables: availableTags,
          defaultValue: 'select a tag',
        }}
        name="tags"
      ></Input>
      <Translate value="AdEditor.TypeofAd" />
      <div>
        <label>
          <Translate value="AdEditor.Buy" />
          <Input
            name="sale"
            template="radio"
            otherProps={{
              radioValue: false,
              required: true,
            }}
          />
        </label>
        <label>
          <Translate value="AdEditor.Sell" />
          <Input
            name="sale"
            otherProps={{
              radioValue: true,
              required: true,
            }}
            template="radio"
          />
        </label>
      </div>
      <Button className="greenButton" type="submit">
        <Translate value="AdEditor.Submit" />
      </Button>
    </div>
  );
}
