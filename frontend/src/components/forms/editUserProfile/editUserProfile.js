import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "./editUserProfile.css";
import {useForm} from "react-hook-form";
import { getCurrentUserProfile, updateUserProfile } from '../../../services/userProfile/userProfile';
import { setUserInfo } from '../../../redux/user/userInfo/userInfoSlice';
import { addFlashMessage } from '../../../redux/message/flashMessageSlice';
import {useNavigate} from 'react-router-dom';

function EditUserProfile(props) {

    const { register, handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        updateUserProfile(data).then((response) => {

            if(response.status == 200){
                props.addFlashMessage({
                    message: "Successfully Updated Profile.",
                    type: "success"
                })
                props.setUserInfo(response);
                navigate(-1);
            }
        })
    }
    
    useEffect(()=>{
        getCurrentUserProfile().then((response)=>{
            if(response.status == 200){
                reset(response);
            }
        })
    }, [])
    

    return (
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <h4 className=''>Edit Profile</h4>
                    <div className="card">
                        <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">
                                        First name
                                    </label> 
                                    <input 
                                        type="text"  
                                        placeholder="Enter your first name" 
                                        {...register("firstname")} />
                                </div>
                                
                                <div className="form-group col-sm-6 flex-column d-flex"> 
                                    <label className="form-control-label px-3">Last name</label> 
                                    <input 
                                        type="text" 
                                        placeholder="Enter your last name"
                                        {...register("lastname")} /> 
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> 
                                    <label className="form-control-label px-3">Street Address</label> 
                                    <input 
                                        type="text" 
                                        placeholder="Enter Street Address"
                                        {...register("streetAddress")} /> 
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">
                                        City
                                    </label> 
                                    <input 
                                        type="text"  
                                        placeholder="Enter City" 
                                        {...register("city")} />
                                </div>    
                                <div className="form-group col-sm-6 flex-column d-flex"> 
                                    <label className="form-control-label px-3">State</label> 
                                    <input 
                                        type="text" 
                                        placeholder="Enter State"
                                        {...register("state")} /> 
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3">
                                    Zip Code
                                </label> 
                                <input 
                                    type="text"  
                                    placeholder="Enter Zip Code" 
                                    {...register("zipCode")} />
                                </div>
                            
                                <div className="form-group col-sm-6 flex-column d-flex"> 
                                    <label className="form-control-label px-3">Phone Number</label> 
                                    <input
                                        type="number" 
                                        placeholder="Enter Phone Number"
                                        {...register("phoneNumber")} /> 
                                </div>
                            </div>
                            <div className='text-right'>
                                <button className='btn btn-primary'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
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
        setUserInfo: (payload) => {
            dispatch(setUserInfo(payload));
        },
        addFlashMessage: (payload) => {
            dispatch(addFlashMessage(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile)