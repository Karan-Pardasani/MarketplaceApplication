import React from 'react'

function FormLink(props) {
  return (
    <p><a href={props.href} className='link-underline-light'>{props.text}</a></p>
  )
}

export default FormLink