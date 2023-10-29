import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Uploader from '../../buttons/Uploader'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Trash } from 'react-bootstrap-icons';
import EditUploadButton from "../../buttons/editUploadButton";
import { connect } from 'react-redux';
import { addCarouselImageAction, removeCarouselImageAction, updateCarouselImageAction } from '../../../redux/actions';


function CarouselEditSection(props) {
  const {section, addImages, updateImage, removeImage} = props;
  
  const addImageCallbackFunc = (files) => {
    if(files.length === 0)
      return;
    var payload = {index: section.section_index, files: []};
    files.map((file) => {
      payload.files.push(file.fileUrl);
    });
    addImages(payload);
  }

  const updateImageCallbackFunc = (files, item_index) => {
    if(files.length == 0)
      return;
    var payload = {section_index: section.section_index, file: files[0].fileUrl, item_index}
    updateImage(payload);
  }

  const removeImageCallbackFunc = (item_index) => {
    var payload = {section_index: section.section_index, item_index};
    removeImage(payload);
  }
  
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
                  <EditUploadButton callbackFunc={(files) => {updateImageCallbackFunc(files, index)}}/>
                  <Button onClick={() => removeImageCallbackFunc(index)} variant='danger' size='sm' className='ml-2'><Trash/></Button>
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
              <Uploader callbackFunc={addImageCallbackFunc}/>
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addImages: (payload) => {
      dispatch(addCarouselImageAction(payload));
    },
    updateImage: (payload) => {
      dispatch(updateCarouselImageAction(payload));
    },
    removeImage: (payload) => {
      dispatch(removeCarouselImageAction(payload));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarouselEditSection)