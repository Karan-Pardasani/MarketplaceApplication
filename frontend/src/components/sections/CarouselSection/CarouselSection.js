import React from 'react'
import RenderCarousel from './RenderCarousel';
import { Col, Container, Form, Row } from 'react-bootstrap';
import {uploadFile} from '../../../services/sections/sections_helper';
import Uploader from '../../buttons/Uploader';
import { saveImages } from '../../../services/uploader';
import { addCarouselImageAction, updateSectionAction } from '../../../redux/actions';
import { connect } from 'react-redux';
import { CAROUSEL_ADD_IMAGE_ACTION } from '../../../redux/constants';


function CarouselSection(props) {
  const {section, index, addImages} = props;

  const callbackFunc = (files, index) => {
    var payload = {};
    payload.index = index;
    payload.files = [];
    files.map((file) => {
      payload.files.push(file.fileUrl);
    });
    addImages(payload);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className='float-right'>
            <Uploader callbackFunc={(files) => {callbackFunc(files, index)}}/>
          </div>
        </Col>
      </Row>
      <Row>
        <RenderCarousel
          section={section}
        />
      </Row>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addImages: (payload) => {
      dispatch(addCarouselImageAction(payload));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselSection)