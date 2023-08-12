import React from 'react'
import './login.css'
import FormButton from '../../buttons/form_button'
import FormLink from '../../link/link'
import TextField from '../../fields/textfield/textField'
import { useForm } from 'react-hook-form';

function Login() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="center-form">
            <h3 className='mb-3'>Sign In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='username'>Username</label>
                    <input className='form-control' {...register("username")} />
                </div>
                
                <div className="form-group mb-3">
                    <label className='mb-3' htmlFor='username'>Password</label>
                    <input className='form-control' type="password" {...register("password")} />
                </div>
                
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <FormLink href="/register" text="Register" />
                </div>

            </form>
        </div>
    )
}

export default Login