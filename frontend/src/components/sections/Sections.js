import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './sections.css';
import Section from './Section';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Sections(props) {

  const {sections, setShowModal, setEditSectionIndex} = props;
  const navigate = useNavigate();

  const openEditSection = (section_type, index) => {
    if(section_type == "carousel"){
      setShowModal(true);
      setEditSectionIndex(index);
    }
    else{
      console.log("redirect to appropriate component route");
    }
  }

  return (
    <>
      <Container fluid className='mt-5'>
        {
          sections.map((section, index) => {
            return(
            <section key={index}>
              <Row>
                <Card>
                  <Card.Header>
                    <Row>
                      <Col>
                      <Card.Title>
                        {section.section_title}
                      </Card.Title>
                      </Col>
                      <Col>
                        <Button className='float-right' variant='warning' onClick={() => {openEditSection(section.section_type, index)}}>Edit</Button>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Section 
                      section={section}
                      index={index}/>
                  </Card.Body>
                </Card>
              </Row>
            </section>
            )})
        }

      </Container>
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
      updateSection : (payload) => {
        // dispatch(updateSection(payload))
      },
      addImages: (payload) => {
        // dispatch(addImages(payload))
      },
      updateImage: (payload) => {
        // dispatch(updateImage(payload))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sections)