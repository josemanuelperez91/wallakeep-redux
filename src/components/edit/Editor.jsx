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
          max: '999999999',
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
        }}
        name="tags"
      ></Input>
      <Translate value="AdEditor.type" />
      <div>
        <label className={'radio-sell'}>
          <Translate value="AdEditor.sell" />
          <Input
            name="sale"
            otherProps={{
              radioValue: true,
              required: true,
            }}
            template="radio"
          />
        </label>
        <label className={'radio-buy'}>
          <Translate value="AdEditor.buy" />
          <Input
            name="sale"
            template="radio"
            otherProps={{
              radioValue: false,
              required: true,
            }}
          />
        </label>
      </div>
      <Button className="greenButton" type="submit">
        <Translate value="AdEditor.submit" />
      </Button>
    </div>
  );
}
