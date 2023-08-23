import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {useForm} from "react-hook-form";
import { addFlashMessage } from '../../../redux/message/flashMessageSlice';
import {useNavigate} from 'react-router-dom';
import { changePassword } from '../../../services/auth/changePassword';

function ChangePasswordForm() {

    const onSubmit = (data) => {
        changePassword(data);
    }

    const { register, handleSubmit, formState: {errors}, getValues} = useForm();
    const navigate = useNavigate();

    return (
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <h4 className=''>Change Password</h4>
                    <div className="card">
                        <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> 
                                    <label className="form-control-label px-3">Current Password</label> 
                                    <input 
                                        type="password" 
                                        placeholder="Enter Current Password for Validation"
                                        {...register("currentPassword",{
                                            required: "Current Password is required."
                                        })} /> 
                                        <p className='error-msg'>{errors.currentPassword?.message}</p>
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> 
                                    <label className="form-control-label px-3">New Password</label> 
                                    <input 
                                        type="password" 
                                        placeholder="Enter New Password"
                                        {...register("newPassword",{
                                            required: "New Password is required"
                                        })} /> 
                                        <p className='error-msg'>{errors.newPassword?.message}</p>
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> 
                                    <label className="form-control-label px-3">Confirm New Password</label> 
                                    <input 
                                        type="password" 
                                        placeholder="Confirm New Password"
                                        {...register("confirmNewPassword",{
                                            required: "Confirm New Password is required.",
                                            validate: (v) => {
                                                return v == getValues("newPassword") || "Confirm New Password show match the new Password."
                                            }
                                        })} /> 
                                        <p className='error-msg'>{errors.confirmNewPassword?.message}</p>
                                </div>
                            </div>

                            <div className='text-right'>
                                <button className='btn btn-warning'>Update Password</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordForm