import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Uploader from '../../buttons/Uploader'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Trash } from 'react-bootstrap-icons';
import EditUploadButton from "../../buttons/editUploadButton";


function CarouselEditSection(props) {
  const {section, selectedSection, addImages, updateImage} = props;
  console.log(section);

  const generateCard = (index) => {
    const item = section.carousel_items[index];
    var imageStyle = { width: "200px", height: "200px"};
    if(item.remove == true){
      imageStyle.opacity = "40%";
    }
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={imageStyle} variant="top" src={item.file_url} />
          <Card.Body>
            <Container fluid>
              <Row>
                <Col>
                  <EditUploadButton callbackFunc={(files) => {updateImage("edit", selectedSection, index, files)}}/>
                  <Button onClick={() => updateImage("remove", selectedSection, index, null)} variant='danger' size='sm' className='ml-2'><Trash/></Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  const carousel_items = [];
  for( let index = 0; index < section.carousel_items.length;){
    const item = section.carousel_items[index]
    var curr_element = null;
    if(index+1<section.carousel_items.length ){
      curr_element = <Row>{generateCard(index)}{generateCard(index+1)}</Row>
      index = index + 2;
    }else{
      curr_element = <Row>{generateCard(index)}</Row>
      index = index + 1;
    }
    carousel_items.push(curr_element);
  }
  return (
    <div>
      <Container fluid>
        <Row>
          <Col >
            <div className='float-right'>
              <Uploader callbackFunc={(files) => {addImages(files, selectedSection)}}/>
            </div>
          </Col>
        </Row>
        <Row>
            { carousel_items.map((item) => item) }
        </Row>
      </Container>
    </div>
  )
}

export default CarouselEditSection