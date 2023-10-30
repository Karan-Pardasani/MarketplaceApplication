import React from 'react'
import { useParams } from 'react-router-dom'
import EditSection from '../sections/EditSection/EditSection';
import { connect } from 'react-redux';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import TextField from '../fields/TextField';
import NumberInputField from '../fields/NumberInputField';
import { updateSection } from '../../redux/actions';

function EditProductTemplate(props) {

  const {section} = props;

  

  return (
    <Container fluid>
      
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    sections: state.productTemplate.sections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSection: (payload) => {
      dispatch(updateSection(payload));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductTemplate);