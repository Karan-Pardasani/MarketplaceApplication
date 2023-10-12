////// NOT USING YET....
import React, { useState } from 'react'
import { Button, Form, Modal, Row, Col, Container } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import './Modals.css';
function SectionOptionsModal(props) {

  const {setShowModal, showModal} = props;
  const {register, handleSubmit, formState: {errors}, control} = useForm();
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

      <Modal show={showModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Add New Section</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form onSubmit={handleSubmit(props.addSection)}>
              <Row>
                <Col>
                  <Form.Group controlId='title_input'>
                    <Form.Label>
                      Title
                    </Form.Label>
                    <Controller
                      name='section_title'
                      control={control}
                      defaultValue={""}
                      render={({field}) => (
                        <Form.Control
                          {...field}
                          type='text'
                          placeholder='Enter the title of the Section'
                        />
                      )}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='type_input'>
                    <Form.Label>
                        Type
                    </Form.Label>

                    <Controller
                      name="section_type"
                      control={control}
                      defaultValue={""}
                      render={({field}) => 
                        (<Form.Control
                            as="select"
                            value={field.value}
                            onChange={ e => {
                              console.log(field);
                              field.onChange(e.target.value)
                              }}>
                              {
                                type_options.map((obj) => 
                                  <option key={obj.value} value={obj.value}>{obj.text}</option>
                                )
                              }
                            ref={field.ref}
                        </Form.Control>)}/>

                  </Form.Group>
                </Col>
              </Row>
              <Row className='mt-4'>
                <Col>
                <Form.Group controlId='section_order_input'>
                    <Form.Label>
                        Section Order
                    </Form.Label>

                    <Controller
                      name='section_order'
                      control={control}
                      defaultValue={""}
                      render={({field}) => (
                        <Form.Control
                          className='w-50'
                          {...field}
                          type='number'
                          placeholder='Enter the order of the Section'
                        />
                      )}
                    />

                  </Form.Group>
                </Col>
              </Row>
              <Button className='mt-3 pull-right' type='submit'><p>Add</p></Button>
              <Button className='mt-3 ml-4 pull-right' onClick={() => setShowModal(false)}><p>Close</p></Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SectionOptionsModal