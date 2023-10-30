import React, { useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import TextField from '../../fields/TextField';
import NumberInputField from '../../fields/NumberInputField';
import configuration from '../../../configurations/configuration.json';
import SelectField from '../../fields/SelectField';
import CheckboxInputField from '../../fields/CheckboxInputField';
import { current } from '@reduxjs/toolkit';
import TextAreaInputField from '../../fields/TextAreaInputField';

// Different Fields in Application: Checkbox; Dropdown, Radio Button, TextArea, TextField
function RenderField(props) {
  const {watch, field, fields, group_index, section_index, field_index, control, getValues} = props;
  console.log(field);
  console.log(props);
  const {title, width, field_type, options, editable} = field;
  const type_options = configuration["FIELD_TYPES"];
  const current_field_type = getValues(`groups.${group_index}.fields.${field_index}.field_type`)
  console.log(current_field_type);
  const field_type_id = `groups.${group_index}.fields.${field_index}.field_type`;

  useEffect(()=>{},[watch(field_type_id)]);

  console.log("getValue!!!!!");
  console.log(getValues(field_type_id));
  return (
    <>
    <Row>
      <Col className='mt-4'>
        <TextField
          label="Title"
          name={`groups.${group_index}.fields.${field_index}.title`}
          control={control}
          defaultValue={title}
          placeholder="Enter the title"
          group_id="field_title_input"
        />
      </Col>
      <Col className='mt-4'>
        <NumberInputField
          label="Width"
          name={`groups.${group_index}.fields.${field_index}.width`}
          control={control}
          defaultValue={0}
          placeholder="Enter the width of the Field"
          group_id="field_width"
        />
      </Col>
    </Row>
    <Row className='align-items-center justify-content-center'>
      <Col className='mt-4'>
        <SelectField
          label="Field Type"
          name={`groups.${group_index}.fields.${field_index}.field_type`}
          control={control}
          defaultValue=""
          options={type_options}
        />
      </Col>
      <Col>
        <div >
          <CheckboxInputField
            name={`groups.${group_index}.fields.${field_index}.editable`}
            label="editable"
            control={control}
            defaultValue={false}
          />
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='mt-4'>
        <TextAreaInputField
          label="Options"
          name={`groups.${group_index}.fields.${field_index}.options`}
          control={control}
          defaultValue=""
          placeholder="Enter options - Separated by semicolon (;)"
          group_id="options_input"
        />
      </Col>
    </Row>
    </>
  )
}

export default RenderField