import React, { useState } from 'react'
import TextField from '../../fields/textfield/textField'
import { useForm } from 'react-hook-form'
import './register.css'
import FormLink from '../../link/link';
import $ from "jquery";

function Register() {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.group(data);
        
    }

    return (
        <div className="center-form">
            <h3 className='mb-3'>Register</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='firstname'>First Name</label>
                    <input className='form-control' {...register("firstname")} />
                </div>
                
                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='lastname'>Last Name</label>
                    <input className='form-control' {...register("lastname")} />
                </div>
                
                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='email'>Email</label>
                    <input type='email' className='form-control' {...register("email")} />
                </div>

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='password'>Password</label>
                    <input className='form-control' {...register("password")} />
                </div>  

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='confirmPassword'>Confirm Password</label>
                    <input className='form-control' {...register("confirmPassword")} />
                </div>
                
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <FormLink href="/login" text="Sign In" />
                </div>

            </form>
        </div>
    )
}

export default Register