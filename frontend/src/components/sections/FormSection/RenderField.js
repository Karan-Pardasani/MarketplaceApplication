import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';

// Different Fields in Application: Checkbox; Dropdown, Radio Button, TextArea, TextField
function RenderField(props) {
  const {field, fields, group_idx, section_idx, field_idx} = props;

  const {title, width, field_type, options, editable} = field;

  return (
    <>
    <Row>
      <Col className='mt-4'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' id={`field-title-${field_idx}`} className='ml-4'/>
      </Col>
      <Col className='mt-4'>
        <Form.Label>Width</Form.Label>
        <Form.Control type='number'  id={`field-width-${field_idx}`} className='ml-4'/>
      </Col>
    </Row>
    <Row className='align-items-center justify-content-center'>
      <Col className='mt-4'>
        <Form.Label>Field Type</Form.Label>
        <Form.Select>
          <option>Select a Field Type</option>
          <option value="checkbox">Checkbox</option>
          <option value="dropdown">Dropdown</option>
          <option value="radio">Radio Button</option>
          <option value="text-area">Text Area</option>
          <option value="text-field">Text Field</option>
        </Form.Select>
      </Col>
      <Col>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Form.Check
            type="checkbox"
            id="editable"
            label="editable">
          </Form.Check>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='mt-4'>
        <Form.Label>Options</Form.Label>
        <Form.Control as="textarea"/>
      </Col>
    </Row>
    </>
  )
}

export default RenderField