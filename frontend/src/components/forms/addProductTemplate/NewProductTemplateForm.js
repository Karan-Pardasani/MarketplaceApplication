import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFieldArray, useForm } from 'react-hook-form';
import TextField from '../../fields/TextField';
import Tags from '../../tags/Tags';
import Sections from '../../sections/Sections';
import { connect } from 'react-redux';
import { submitProductTemplateForm } from '../../../services/sections/sections_helper';

function NewProductTemplateForm(props) {
  const {setShowModal, stateSections, setEditSectionIndex, resetFormFunc} = props;
  const { control, register, handleSubmit, formState: {errors, dirtyFields}, setValue } = useForm({
    defaultValues: {
      tags: [],
      sections: []
    }
  });

  const {fields: sections, append: appendSection, remove: removeSection} = useFieldArray({
    name: "sections",
    control,
  });
  
  const onSubmit = (data) => {
    // API to store data in the backend
    console.log(dirtyFields);
    submitProductTemplateForm(stateSections);
  }

  const onError = (errors) => {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Row>
            
            <Col>
              <TextField 
                label="Template Title" 
                name="template_title"
                defaultValue=""
                control={control}
                style={{width: "60%"}}
                placeholder="Enter the title of the template"
                group_id="template_title_group"
                />
            </Col>

            <Col>
              <Tags
                register={register} 
                control={control}/>
            </Col>
          </Row>
          <Row>
            <Button variant='success' style={{width: "15%"}} onClick={() => {setEditSectionIndex(-1);resetFormFunc();setShowModal(true)}}>
                <p>Add Section +</p>
            </Button>
          </Row>
          <Sections
            setShowModal={setShowModal}
            sections={sections} 
            setEditSectionIndex={setEditSectionIndex}
            resetFormFunc={resetFormFunc}/>
            
          <Row className='mt-5'>
            <Button style={{width: "10%"}} size='sm' variant='success' onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Row>
        </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.productTemplate.title,
    stateSections: state.productTemplate.sections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductTemplateForm)