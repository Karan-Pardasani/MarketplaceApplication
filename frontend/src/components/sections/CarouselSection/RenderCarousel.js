import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { ThreeDots } from 'react-bootstrap-icons';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
function RenderCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const {section, updateImage} = props;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='mt-5'>
      {
        section.carousel_items.map((item, index) => {
          return (
          <Carousel.Item key={index}>
            <div style={{position: "relative"}}>
              <CarouselImage style={{width: "100%", height: "500px", display: "block"}} src={item.file_url}/>
            </div>
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )})
      }
    </Carousel>
  )
}

export default RenderCarousel