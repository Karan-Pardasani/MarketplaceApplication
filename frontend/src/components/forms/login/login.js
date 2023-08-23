import React, {useState, useEffect} from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {loginUser} from '../../../services/auth/authenticate';
import { setToken } from '../../../redux/user/auth/authSlice';
import { useNavigate } from "react-router-dom";
import { addFlashMessage, removeFlashMessage } from '../../../redux/message/flashMessageSlice';
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Login({ user, setToken, addFlashMessage, removeFlashMessage }) {

    const { register, handleSubmit, formState } = useForm();
    const {errors} = formState;
    const navigate = useNavigate();

    useEffect(() => {
        if(user.auth.token != null){
            navigate("/");
        }    
        
    });

    const onSubmit = (data) => {
        loginUser(data).then((response) => {
            console.log(response);
            if(response.status == 200){
                setToken({"token": response.token});
                localStorage.setItem("token", response.token);
                navigate("/");                
            }
        });
    }

    return (
        <div>
        <div className="center-form">
            <h3 className='mb-3'>Sign In</h3>
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
                    <Link to="/register"> Register </Link>
                </div>

            </form>
        </div>
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
        addFlashMessage: (payload) => {
            dispatch(addFlashMessage(payload));
        },
        removeFlashMessage: (payload) => {
            dispatch(removeFlashMessage(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)