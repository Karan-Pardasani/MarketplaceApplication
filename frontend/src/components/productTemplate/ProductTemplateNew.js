import React, { useState } from 'react';
import Header from '../header/header';
import './productTemplate.css'
import {Container, Row } from 'react-bootstrap';
import SectionOptionsModal from '../modals/sectionOptionsModal';
import { connect } from 'react-redux';
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
      {/* <Footer/> */}
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