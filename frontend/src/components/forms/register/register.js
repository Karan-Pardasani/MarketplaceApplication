import React, { useState, useEffect } from 'react'
import TextField from '../../fields/textfield/textField'
import { useForm } from 'react-hook-form'
import './register.css'
import FormLink from '../../link/link';
import $ from "jquery";
import { registerUser } from '../../../services/auth/authenticate';
import { DevTool } from '@hookform/devtools';
import authSlice, { setToken } from '../../../redux/user/auth/authSlice';
import {connect} from 'react-redux';
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Register({user, setToken}) {

    const { register,  handleSubmit, getValues, formState, control} = useForm();
    const {errors} = formState;
    const [response, setResponse] = useState("");
    const navigate = useNavigate();


    console.log(response);

    useEffect(() => {

        if(user.auth.token != null){
            navigate("/");
        }    

    });


    const onSubmit = (data) => {
        console.log(data);
        registerUser(data).then((res) => {
            if (res.status == "CONFLICT"){
                setResponse(res.message);
            }
            if(res.token != null){
                setToken({ token: res.token });
                localStorage.setItem("token", res.token);
                navigate("/");
            }
        });
        
    }
    
    return (
        <div className="center-form">
            <h3 className='mb-3'>Register</h3>
            <h5 className='error-msg'>{response}</h5>
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (payload) => {
            dispatch(setToken(payload));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)