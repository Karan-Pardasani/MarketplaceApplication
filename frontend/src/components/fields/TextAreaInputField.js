import React from 'react'
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

function TextAreaInputField(props) {
  const {label, name, control, defaultValue, style, placeholder, group_id} = props;
  var placeholder_ = placeholder || "Enter the value";
  return (
      <Form.Group controlId={`${group_id}`}>
          <Form.Label>{label}</Form.Label>
          <Controller
            name={`${name}`}
            control={control}
            defaultValue={defaultValue}
            render={({field})=>{
              return (
              <Form.Control style={style} size='sm' {...field} type='textarea'
                placeholder={placeholder_}
              />)
            }}
          />
      </Form.Group>)
}

export default TextAreaInputField