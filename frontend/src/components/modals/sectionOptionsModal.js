////// NOT USING YET....
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col, Container } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import './Modals.css';
import configuration from '../../configurations/configuration.json'
import EditSection from '../sections/EditSection/EditSection';


function SectionOptionsModal(props) {
  const {setShowModal, showModal, selectedSection, 
    closeModal, section, resetForm, setResetForm, addImages, updateImage} = props;

  let defaultValues = {
    section_title: "",
    section_type: "",
    section_order: ""
  }
  
  let submitFunction = null;

  if(selectedSection === -1)
  {
    submitFunction = (data) => {
      
      props.addSection(data);
    };
  }else
  {
    submitFunction = (data) => {
       
      props.updateSection(data);
    };

    defaultValues = {
      section_title: section.section_title,
      section_type: section.section_type,
      section_order: section.section_order
    }
  }
  const type_options = [
    {
      value: "",
      text: ""
    },
    ...configuration["SECTION_TYPES"]
  ];
  console.log(defaultValues);
  const {register, handleSubmit, formState: {errors}, control, reset} = useForm({
    defaultValues: defaultValues,
    shouldUnregister: true
  });

  useEffect(()=>reset(), [resetForm]);

  return (
    <>

      <Modal show={showModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            {
              selectedSection === -1 ? (<h4>Add New Section</h4>) : (<h4>Edit Section</h4>)
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form onSubmit={handleSubmit(submitFunction)}>
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
                      defaultValue={0}
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
              {
                selectedSection >= 0 ? (
                  <>
                    <hr className='mt-5 mb-5'/>
                    <EditSection
                      selectedSection={selectedSection} 
                      section={section}
                      addImages={addImages}
                      updateImage={updateImage}/>
                  </>
                ) : ( 
                  null
                )
              }
              <Button variant='success' className='mt-3 pull-right' type='submit'>
                <p>Save</p>
              </Button>
              <Button variant='success' className='mt-3 ml-4 pull-right' onClick={() => {reset();closeModal();}}><p>Close</p></Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SectionOptionsModal