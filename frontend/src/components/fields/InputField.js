//NOT using this file currently..
import React from 'react'

function InputField({register, name, ...rest}) {
  return (
    <input {...register(name)} {...rest}/>
  )
}

export default InputField