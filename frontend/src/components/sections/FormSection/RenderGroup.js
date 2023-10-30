import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import RenderField from './RenderField';
import { connect } from 'react-redux';
import TextField from '../../fields/TextField';
import { addFieldFormAction } from '../../../redux/actions';
import { useFieldArray } from 'react-hook-form';

function RenderGroup(props) {
  const {watch, group, edit, group_idx, section_index, addField, control, group_index, getValues} = props;
  console.log("Group!!");

  console.log("group");
  console.log(group);

  const {fields, append, remove} = useFieldArray({
    name: `groups.${group_index}.fields`,
    control
  })

  const addFieldFunc = () => {
    append({
      title: "",
      width: 0,
      field_type: "text",
      options: "",
      editable: false,
      index: fields.length
    })
    addField({section_index, group_index});
  }
  return (
    <>
      <Row >
        <Col className='mt-2'>
          <TextField
            label="Title"
            name={`groups.${group_index}.group_title`}
            control={control}
            defaultValue=""
            placeholder="Enter Group Title"
            group_id="group_title_input"
            style={{width: "50%"}}
          />
        </Col>
      </Row>
      <Row style={{marginTop: "2rem"}}>
        <Col>
        <Button variant='success' size='sm' className='' onClick={addFieldFunc}>
          Add Field
        </Button>
        </Col>
      </Row>
      {
        fields.map((field, index) => {
          return (
            <Row key={field.id}>
              <RenderField
                watch={watch}
                getValues={getValues}
                control={control}
                field={field}
                group_index={group_index}
                field_index={index}
                section_index={section_index}/>
                <hr style={{marginTop: "3rem", marginBottom: "3rem", width:"96.5%"}}/>
            </Row>
          )
        })
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addField: (payload) => {
      dispatch(addFieldFormAction(payload));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderGroup);