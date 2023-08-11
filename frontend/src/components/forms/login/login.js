import React from 'react'
import './login.css'
import FormButton from '../../buttons/form_button'
import FormLink from '../../link/link'
import TextField from '../../fields/textfield/textField'


function Login() {
  return (
    <div class="center-form">
        <form>
            <h3>Sign In</h3>
            <div className="mb-3">
                <TextField type_ = "email" placeholder= "Enter email" label = "Email Address"/>
            </div>
            <div className="mb-3">
                <TextField type_="password" placeholder="Enter Password" label="Password" />
            </div>
            <div className="mb-3">
            {/* <div className="custom-control custom-checkbox">
                <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
                </label>
            </div> */}
            </div>
            <div className="d-grid">
            <FormButton type="submit" style_="primary" text="Submit"  />
            <FormLink href="/register" text="Register" />
            </div>
            {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            </p> */}
        </form>
    </div>
  )
}

export default Login