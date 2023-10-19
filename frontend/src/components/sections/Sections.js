import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './sections.css';
import Section from './Section';

function Sections(props) {
  const {sections, editSection, addImages, updateImage} = props;
  return (
    <>
      <Container fluid className='mt-5'>
        {
          sections.map((section, index) => {
            console.log("index: ");
            console.log(index);
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
                        <Button className='float-right' variant='warning' onClick={() => editSection(index)}>Edit</Button>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Section 
                      index={index} 
                      section={section}
                      addImages={addImages}
                      updateImage={updateImage}/>
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

export default Sections