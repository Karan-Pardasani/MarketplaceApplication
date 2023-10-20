import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import RenderField from './RenderField';

function RenderGroup(props) {
  const {group, edit, group_idx, section_idx, addField} = props;
  const fields = group.fields; 
  return (
    <>
      <Row>
        <Col className='mt-2'>
          <label>Group Title</label>
          <input className='ml-4 h-75'/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant='success' size='sm' className='' onClick={()=>addField(section_idx, group_idx)}>
          Add Field
        </Button>
        </Col>
      </Row>
      {
        fields.map((field, index) => {
          return (
            <Row key={index}>
              <RenderField
                field={field}
                fields={fields}
                group_idx={group_idx}
                field_idx={index}
                section_idx={section_idx}/>
                <hr style={{marginTop: "3rem", marginBottom: "3rem", width:"96.5%"}}/>
            </Row>
          )
        })
      }
    </>
  )
}

export default RenderGroup