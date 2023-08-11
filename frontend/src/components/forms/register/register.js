import React, { useState } from 'react'
import TextField from '../../fields/textfield/textField'

function Register() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null)

  return (
    <>
        <form class=".center-form">
            <h3>Register</h3>
            <div className='mb3'>
                <TextField type_ = "text" label="First Name" placeholder = "First Name" />
            </div>
            <div className='mb3'>
                <TextField type_ = "text" label="Last Name" placeholder = "Last Name" />
            </div>
            <div className='mb3'>
                <TextField type_ = "email" label="Email Address" placeholder = "Email Address" />
            </div>
            <div className='mb3'>
                <TextField type_ = "password" label="Password" placeholder = "Password" />
            </div>
            <div className='mb3'>
                <TextField type_ = "password" label="Confirm Password" placeholder = "Confirm Password" />
            </div>
        </form>
    </>
  )
}

export default Register