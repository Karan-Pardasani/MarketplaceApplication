import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useFieldArray } from 'react-hook-form';

function Tags(props) {
  
  const {control, register} = props;
  const {fields: tags, append, remove} = useFieldArray({
    name: "tags",
    control,
  });

  return (
    <Container fluid>
      <Row>
        <Col className='.content'>
          <p>Tags</p>
          <Button variant='success' size='sm' style={{fontSize: "medium"}} className=' ml-2 mb-2 add-btn' onClick={() => {append({value: ""})}}>
            Append
          </Button>
        </Col>
      </Row>
      <Row style={{height: "200px", overflowY: "auto"}}>
        {
          tags.map((field, index) => {
            return (
            <Col>
              <section key={field.id} className='mt-2'>
                <label>
                  <input
                    type='text'
                    {...register(`tags.${index}.value`)}
                  />
                  <Button variant='danger ml-2' size='sm' onClick={()=>{remove(index)}}>X</Button>
                </label>
              </section>
            </Col>);
          })
        }
      </Row>
    </Container>
  )
}

export default Tags