import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import RenderGroup from '../FormSection/RenderGroup';
import { connect } from 'react-redux';
import EditProductTemplate from '../../productTemplate/EditProductTemplate';
import { useFieldArray, useForm } from 'react-hook-form';
import TextField from '../../fields/TextField';
import NumberInputField from '../../fields/NumberInputField';
import { addGroupFormAction, updateSection } from '../../../redux/actions';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function FormEditSection(props) {
  console.log("render FormEditSection");
  const {addGroup, removeGroup, section, addField, updateSection} = props;
  const [resetForm, setResetForm] = useState(false);

  const toggleResetForm = () => {
    setResetForm(!resetForm);
  }
  // const groups = section.groups
  const defaultValues = {
    section_title: section.section_title,
    section_type: section.section_type,
    section_order: section.section_order,
    groups: section.groups
  }
  
  const onSubmit = (data) => {
    console.log(data);
    // updateSection({section: data, index: section.section_index})
  }
  console.log(defaultValues);
  const {handleSubmit, formState: {errors, isDirty, dirtyFields}, control, reset, getValues, watch} = useForm({
    defaultValues: defaultValues,
    shouldUnregister: true
  });

  const {fields: groups, append, remove} = useFieldArray({
    control,
    name: "groups",
  });

  const addGroupFunc = () => {
    // toggleResetForm();
    append({group_title: "", fields: []});
    addGroup({index: section.section_index});
  }

  // useEffect(()=>{
  //   console.log("reset!!");
  //   reset(defaultValues)
  // }, [resetForm]);
  return (
    <>
    <Header/>
    <Container fluid style={{paddingLeft: "15rem", paddingRight: "15rem"}}>
      <Row className='mt-3' style={{textAlign: "center"}}>
        <h3>Edit {section.section_title}</h3>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='mt-3'>
          <Col>
            <TextField
              style={{width: "70%"}}
              label="Title"
              name="section_title"
              control={control}
              defaultValue=""
              placeholder="Enter the title of the Section"
              group_id="title_input"
            />
          </Col>
          <Col>
            <NumberInputField
              style={{width: "100%"}}
              label="Section Order"
              name="section_order"
              control={control}
              defaultValue={0}
              placeholder="Enter the order of the Section"
              group_id="section_order_input"/>
          </Col>
        </Row>
        <Row style={{marginTop: "2rem"}}>
          <Col>
            <Button style={{width: '20%'}} variant='success' onClick={addGroupFunc}>Add Group</Button>
          </Col>
        </Row>

        {
          groups.map((group, index) => {
            return (
              <Container key={index} className='mt-4' style={{border: "1px solid lightgrey", padding: "12px"}}>
                <RenderGroup
                  watch={watch}
                  getValues={getValues}
                  control={control}
                  edit={true}
                  group_index={index}
                  group={group}
                  section_index={section.section_index}/>
              </Container>
            )
          })
        }
      <Row>
        <Col>
          <Button variant='success' className='mt-3 pull-right' type='submit'>
            <p>Save</p>
          </Button>
          <Button variant='success' className='mt-3 ml-4 pull-right' onClick={() => {}}><p>Close</p></Button>
        </Col>
      </Row>

      </Form>
    </Container>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGroup: (payload) => {
      dispatch(addGroupFormAction(payload));
    },
    addField: (payload) => {

    },
    removeGroup: (payload) => {

    },
    updateSection: (payload) => {
      dispatch(updateSection(payload));
    }
  }
}

const mapStateToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEditSection)