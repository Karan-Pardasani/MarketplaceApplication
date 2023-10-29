import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './productTemplate.css'
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import SectionOptionsModal from '../modals/sectionOptionsModal';
import Sections from '../sections/Sections';
import { create_new_section } from '../../services/sections/sections_helper';
import { connect } from 'react-redux';
import Tags from '../tags/Tags';
import TextField from '../fields/TextField';
import NewProductTemplate from '../forms/addProductTemplate/NewProductTemplateForm';
import NewProductTemplateForm from '../forms/addProductTemplate/NewProductTemplateForm';

function ProductTemplateNew(props) {

  const {action, title} = props;
  const [resetForm, setResetForm] = useState(false);

  const resetFormFunc = () => {
    setResetForm(!resetForm);
  }

  let productTemplateComponent = null;

  
  const [showModal, setShowModal] = useState(false);
  const [editSectionIndex, setEditSectionIndex] = useState(-1);

  if(action == "New"){
    productTemplateComponent = () => {
      return <NewProductTemplateForm 
        resetFormFunc={resetFormFunc}
        setEditSectionIndex={setEditSectionIndex}
        setShowModal={setShowModal}/>
    }
  }

  return (
    <>
      <Header/>
      <Container fluid style={{width:"75%"}} className='mt-5'>
        <Row className='text-center'>
          <h4> {action} Product Template</h4>
        </Row>
        {productTemplateComponent()}
      </Container>
      <Footer/>
      <SectionOptionsModal
        showModal = {showModal}
        setShowModal={setShowModal}
        editSectionIndex={editSectionIndex}
        setEditSectionIndex={setEditSectionIndex}
        resetFormFunc={resetFormFunc}
        resetForm={resetForm}/>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplateNew)