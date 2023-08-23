import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "./userProfile.css";
import { Link } from 'react-router-dom';
import { getCurrentUserProfile } from '../../services/userProfile/userProfile';
import { useNavigate } from 'react-router-dom';

function UserProfile(props) {

    const [data, setData] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        getCurrentUserProfile().then((response) => {
            if(response.status == 200){
                setData(response);
            }else{
                navigate("/");
            }
        })
    }, [data]);

    return (
    <>
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <div className="card">
                        <div className="form-card">
                            <div className="row justify-content-end">
                                <div className="form-group col-sm-2"> 
                                    <Link to="/user-profile/edit">
                                        <button className="btn-block btn-primary">Edit</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className=' col-sm-6 flex-column d-flex'>
                                    <p className='px-3'> 
                                        First Name
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.firstname}</strong>
                                    </p>
                                </div>
                                <div className=' col-sm-6 flex-column d-flex'>
                                    <p className='px-3'> 
                                        Last Name
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.lastname}</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className=' col-sm-10 flex-column d-flex'>
                                    <p className='px-3'> 
                                        Email
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.email}</strong>
                                    </p>
                                </div>
                                <div className=' col-12 flex-column d-flex'>
                                    <p className='px-3'> 
                                        Street Address
                                    </p>
                                    <p className='col-12 flex-column d-flex'>
                                        <strong>{data && data.streetAddress}</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className=' col-sm-6 flex-column d-flex'>
                                    <p className='px-3'> 
                                        City
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.city}</strong>
                                    </p>
                                </div>
                                <div className=' col-sm-6 flex-column d-flex'>
                                    <p className='px-3'> 
                                        State
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.state}</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                <div className=' col-sm-6 flex-column d-flex'>
                                    <p className='px-3'> 
                                        Zip Code
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.zipCode}</strong>
                                    </p>
                                </div>
                                <div className=' col-sm-6 flex-column d-flex'>
                                    <p className='px-3'> 
                                        Phone Number
                                    </p>
                                    <p className='col-sm-6 flex-column d-flex'>
                                        <strong>{data && data.phoneNumber}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)