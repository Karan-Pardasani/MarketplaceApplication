import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RenderGroup from '../FormSection/RenderGroup';

function FormEditSection(props) {
  const {addGroup, removeGroup, section, selectedSection, addField} = props;

  const groups = section.groups

  return (
    <Container fluid>
      <Row>
        <Button style={{width: '50%'}} variant='success' onClick={() => addGroup(selectedSection)}>Add Group</Button>
      </Row>

      {
        groups.map((group, index) => {
          return (
            <Container key={index} className='mt-4' style={{border: "1px solid lightgrey", padding: "12px"}}>
              <RenderGroup 
                edit={true} 
                group={group} 
                addField={addField} 
                group_idx={index} 
                section_idx={selectedSection}/>
            </Container>
          )
        })
      }

    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGroup: (payload) => {

    },
    addField: (payload) => {

    }
  }
}

const mapStateToProps = (dispatch) => {
  return {

  }
}

export default FormEditSection