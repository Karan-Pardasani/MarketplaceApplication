import React from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form';

function CheckboxInputField(props) {
  const {label, name, control, defaultValue} = props;
  console.log(props);
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Controller
        name={`${name}`}
        control={control}
        defaultValue={defaultValue}
        render={({field})=>{
          return(
            <Form.Check
              type="checkbox"
              value={field.value}
              label={label}
              onChange={ e => {
                console.log(e);
                field.onChange(e.target.checked)
              }}
            />
          )
        }}
      />

    </div>
  )
}

export default CheckboxInputField