import React from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form';


function NumberInputField(props) {
  const {label, name, control, defaultValue, style, placeholder_, group_id} = props;
  var placeholder = placeholder_ || "Enter the value";
  return (
    <Form.Group controlId={`${group_id}`}>
          <Form.Label>{label}</Form.Label>
          <Controller
            name={`${name}`}
            control={control}
            defaultValue={defaultValue}
            render={({field})=>{
              return (
              <Form.Control style={style} className='w-50' size='sm' {...field} type='number'
                placeholder={placeholder}
              />)
            }}
          />
      </Form.Group>)
}

export default NumberInputField