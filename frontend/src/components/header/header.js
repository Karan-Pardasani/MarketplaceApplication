import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import {connect} from "react-redux";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header({ user }) {



    return (
    <Navbar>
        <Container>
        <Navbar.Brand href="/">Thousand Oaks Marketplace</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            {
                (user.auth.token != null) ? (

                    <NavDropdown title={user.info.firstname} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header)