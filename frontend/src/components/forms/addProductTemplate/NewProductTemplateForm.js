import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFieldArray, useForm } from 'react-hook-form';
import TextField from '../../fields/TextField';
import Tags from '../../tags/Tags';
import Sections from '../../sections/Sections';
import { connect } from 'react-redux';

function NewProductTemplateForm(props) {
  const {setShowModal, setEditSectionIndex, resetFormFunc} = props;
  const { control, register, handleSubmit, formState: {errors}, setValue } = useForm({
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
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
    title: state.productTemplate.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductTemplateForm)