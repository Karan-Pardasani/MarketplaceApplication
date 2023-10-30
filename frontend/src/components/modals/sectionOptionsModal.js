////// NOT USING YET....
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col, Container } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import './Modals.css';
import configuration from '../../configurations/configuration.json'
import EditSection from '../sections/EditSection/EditSection';
import TextField from '../fields/TextField';
import SelectField from '../fields/SelectField';
import NumberInputField from '../fields/NumberInputField';
import { connect } from 'react-redux';
import { addSection, updateSection } from '../../redux/actions';

function SectionOptionsModal(props) {
  const {showModal, setShowModal, editSectionIndex, setEditSectionIndex, sections, addSection, updateSection, resetFormFunc, resetForm} = props;
  const section = sections[editSectionIndex];
  var title = ( (editSectionIndex === -1) ? "Add New Section" : `Edit ${section.section_title}` );

  let defaultValues = {
    section_title: "",
    section_type: "",
    section_order: ""
  }

  let submitFunction = null;

  if(editSectionIndex === -1)
  {
    submitFunction = addSection;
  }
  else{

    submitFunction = (data) => {
      updateSection({section: data, index:editSectionIndex})
    };
    defaultValues = {
      section_title: section.section_title,
      section_type: section.section_type,
      section_order: section.section_order
    }
  }

  const onSubmit = (data) => {
    setShowModal(false);
    setEditSectionIndex(-1);
    resetFormFunc();
    submitFunction(data);
  }
  
  const type_options = configuration["SECTION_TYPES"];
  const {handleSubmit, formState: {errors, isDirty, dirtyFields}, control, reset} = useForm({
    defaultValues: defaultValues,
    shouldUnregister: true
  });

  useEffect(()=>{reset()}, [resetForm]);

  return (
    <>

      <Modal show={showModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <TextField
                    label="Title"
                    name="section_title"
                    control={control}
                    defaultValue=""
                    placeholder="Enter the title of the Section"
                    group_id="title_input"
                  />
                </Col>
                {
                  (editSectionIndex === -1) ? (
                  <Col>
                    <SelectField
                      label="Type"
                      name="section_type"
                      control={control}
                      defaultValue=""
                      options={type_options}/>
                  </Col>
                  ) : null
                }
              </Row>
              <Row className='mt-4'>
                <Col>
                  <NumberInputField
                    style={{width: "50%"}}
                    label="Section Order"
                    name="section_order"
                    control={control}
                    defaultValue={0}
                    placeholder="Enter the order of the Section"
                    group_id="section_order_input"/>
                </Col>
              </Row>
              {
                editSectionIndex >= 0 ? (
                  <>
                    <hr className='mt-5 mb-5'/>
                    <EditSection
                      section_index={editSectionIndex} 
                    />
                  </>
                ) : ( 
                  null
                )
              }
              <Button variant='success' className='mt-3 pull-right' type='submit'>
                <p>Save</p>
              </Button>
              <Button variant='success' className='mt-3 ml-4 pull-right' onClick={() => {setShowModal(false);setEditSectionIndex(-1);resetFormFunc();}}><p>Close</p></Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    sections: state.productTemplate.sections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSection: (payload) => {
      dispatch(addSection(payload));
    },
    updateSection: (payload) => {
      dispatch(updateSection(payload));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionOptionsModal)