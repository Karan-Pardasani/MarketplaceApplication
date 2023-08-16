import React, {useState, useEffect} from 'react';
import './login.css';
import FormButton from '../../buttons/form_button';
import FormLink from '../../link/link';
import TextField from '../../fields/textfield/textField';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {loginUser} from '../../../services/auth/authenticate';
import { setToken } from '../../../redux/user/auth/authSlice';
import { useNavigate } from "react-router-dom";

function Login({ user, setToken }) {

    const { register, handleSubmit, formState } = useForm();
    const {errors} = formState;
    const [response, setResponse] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        if(user.auth.token != null){
            navigate("/");
        }    

    });

    const onSubmit = (data) => {
        loginUser(data).then((data) => {
            if(data.token != null){
                setToken(data.token);
                localStorage.setItem("token", data.token);
                navigate("/home");                
            }else{
                setResponse(data.message);
            }
        });
    }

    return (
        <div className="center-form">
            <h3 className='mb-3'>Sign In</h3>
            <h5 className='error-msg'>{response}</h5>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='username'>Username</label>
                    <input className='form-control' {...register("username", {
                        required: "Username is required."
                    })} />
                    <p className='error-msg' >{ errors.username?.message }</p>
                </div>
                
                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='username'>Password</label>
                    <input className='form-control' type="password" {...register("password", {
                        required: "Password is required."
                    })} />
                    <p className='error-msg'> {errors.password?.message} </p>
                </div>
                
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <FormLink href="/register" text="Register" />
                </div>

            </form>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)