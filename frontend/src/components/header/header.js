import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import {connect} from "react-redux";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUserProfile } from '../../services/userProfile/userProfile';
import { setUserInfo } from '../../redux/user/userInfo/userInfoSlice';
import { logout } from '../../services/auth/authenticate';

function Header({ userInfo, user, setUserInfo }) {

    useEffect(()=>{

        if(user.auth.token != null && userInfo.info.firstname == null){
            // call the user info and update User Info
            getCurrentUserProfile().then((response)=>{
                console.log(response);
                if(response != null)
                    setUserInfo(response);
            });
        }

    },[]);

    const navigate = useNavigate();

    return (
    <Navbar>
        <Container>
        <Navbar.Brand href="/">Thousand Oaks Marketplace</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            {
                (user.auth.token != null) ? (

                    <NavDropdown className='navTitle' title={`${userInfo.info.firstname || ""} ${userInfo.info.lastname || ""}`} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/user-profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/change-password">Change Password</NavDropdown.Item>
                        <NavDropdown.Item href="/sell">Sell an Item</NavDropdown.Item>
                        <NavDropdown.Item href="/product-template">Product Templates</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>{logout();navigate("/");}}> Logout</NavDropdown.Item>
                    </NavDropdown>

                ) : (
                    <>
                        <Link to="/login" className='ml-3 navLinks'>Sign In</Link>
                        <Link to="/register" className='ml-3 navLinks' >Register</Link>
                    </>
                )
            }
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (payload) => {
            dispatch(setUserInfo(payload));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)