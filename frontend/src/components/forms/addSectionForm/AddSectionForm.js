//Not using this form currently
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import SelectField from '../../fields/SelectField';
import InputField from '../../fields/InputField';
import { Select } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';

function AddSectionForm(props) {
  const {register, handleSubmit, formState: {errors}, control} = useForm();
  const submitData = {props}
  const type_options = [
    {
      value: "",
      text: ""
    },
    {
      value: "carousel",
      text: "Carousel"
    },
    {
      value: "text-editor",
      text: "Text Editor"
    }
  ];
  return (
    <>
      <Form onSubmit={handleSubmit(submitData)}>
          <Form.Label>
            Type
          </Form.Label>
          <Controller
            name="type_"
            control={control}
            defaultValue={null}
            render={({onChange, name, ref, value}) => 
              (
                <Form.Control
                  as="select"
                  value={value}
                  onChange={ e => onChange(e.target.value)}>
                    {
                      type_options.map((obj) => 
                        <option key={obj.value} value={obj.value}>{obj.text}</option>
                      )
                    }
                  ref={ref}
                </Form.Control>
              )
            }
          />
      </Form>
    </>
  )
}

export default AddSectionForm