import Login from '../components/forms/login/login.js'

import React, {useEffect} from 'react'
import { setToken } from '../redux/user/auth/authSlice.js';
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';


function Home({ user }) {

  const navigate = useNavigate();
  console.log(localStorage.getItem("token"));
  console.log(user);
  useEffect(()=>{
    if( user.auth.token == null){
      navigate("/login");
    }
  }, []);



}

const mapStateToProps = (state) => {

  return {
    user: state.user
  }

};

const mapDispatchToProps = (dispatch) => {

  return {

    
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)