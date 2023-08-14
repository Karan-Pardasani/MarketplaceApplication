import React, { useState } from 'react'
import TextField from '../../fields/textfield/textField'
import { useForm } from 'react-hook-form'
import './register.css'
import FormLink from '../../link/link';
import $ from "jquery";
import { registerUser } from '../../../services/auth/authenticate';
import { DevTool } from '@hookform/devtools';


function Register() {

    const { register,  handleSubmit, getValues, formState, control} = useForm();
    const {errors} = formState;
    const [response, setResponse] = useState({});
    console.log(response);
    const onSubmit = (data) => {
        console.log("*********")
        console.log(data);
        setResponse(registerUser(data));
    }
    console.log(errors);
    return (
        <div className="center-form">
            <h3 className='mb-3'>Register</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='firstname'>First Name</label>
                    <input className='form-control' {...register("firstname",{
                        required: "Username is required."
                    })}/>
                    <p className='error-msg'>{errors.firstname?.message}</p>
                </div>
                
                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='lastname'>Last Name</label>
                    <input className='form-control' {...register("lastname", {
                        required: "Last name is required."
                    })} />
                    <p className='error-msg'>{errors.lastname?.message}</p>
                </div>
                
                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='email'>Email</label>
                    <input type='email' className='form-control' {...register("email",{
                        required: "Email is required."
                    })} />
                    <p className='error-msg'>{errors.email?.message}</p>
                </div>

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='password'>Password</label>
                    <input type='password' className='form-control' {...register("password",{
                        required: "Password is required."
                    })} />
                    <p className='error-msg'>{errors.password?.message}</p>
                </div>  

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' className='form-control' {...register("confirmPassword",{
                        validate: (v) => {
                            console.log("$$$$$$");
                            console.log(getValues("password"));
                            console.log(v)
                            return v ==  getValues("password") || "Confirm password should match the password field.";
                        }
                    })} />
                    <p className='error-msg'>{errors.confirmPassword?.message}</p>
                </div>
                
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <FormLink href="/login" text="Sign In" />
                </div>

            </form>
            <DevTool control={control}/>
        </div>
    )
}

export default Register