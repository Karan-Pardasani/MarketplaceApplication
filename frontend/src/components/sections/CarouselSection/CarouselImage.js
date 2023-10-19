import React from 'react'

function CarouselImage(props) {
  console.log("Logg");
  return (
    <img style={props.style} src={props.src} alt='Image Not Found' />
  )
}

export default CarouselImage