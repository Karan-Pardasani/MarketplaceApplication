import React from 'react'
import RenderCarousel from './RenderCarousel';
import { Col, Container, Form, Row } from 'react-bootstrap';
import {uploadFile} from '../../../services/sections/sections_helper';
import Uploader from '../../buttons/Uploader';
import { saveImages } from '../../../services/uploader';


function CarouselSection(props) {
  const {section, index, addImages} = props;

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className='float-right'>
            <Uploader callbackFunc={(files) => {addImages(files, index)}}/>
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

export default CarouselSection