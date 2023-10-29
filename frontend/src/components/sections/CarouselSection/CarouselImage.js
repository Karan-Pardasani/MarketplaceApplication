import React from 'react'

function CarouselImage(props) {
  return (
    <img style={props.style} src={props.src} alt='Image Not Found' />
  )
}

export default CarouselImage