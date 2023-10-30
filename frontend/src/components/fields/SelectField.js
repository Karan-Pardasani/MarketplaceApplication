// Not using this file currently
import React from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form';

function SelectField(props) {
  const {name, control, defaultValue, options, label} = props;
  return (
    <>
      <Form.Label>
        {label}
      </Form.Label>
      <Controller
        name={`${name}`}
        control={control}
        defaultValue={defaultValue}
        render={({field}) => 
          (<Form.Control
              as="select"
              value={field.value}
              onChange={ e => {
                field.onChange(e.target.value)}}>
                {
                  options.map((obj) => 
                    <option key={obj.value} value={obj.value}>{obj.text}</option>
                  )
                }
          </Form.Control>)}/>
    </>
  )
}

export default SelectField