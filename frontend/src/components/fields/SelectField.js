// Not using this file currently
import React from 'react'
import { Form } from 'react-bootstrap'

function SelectField({register, options, name, ...rest}) {
  return (
    <Form.Select>
      <option>Select Type</option>
      {
        options.map((value) => {
          return (<option key={value} value={value}>{value}</option>)
        })
      }      
    </Form.Select>
  )
}

export default SelectField