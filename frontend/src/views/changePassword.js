import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import ChangePasswordForm from '../components/forms/changePassword/changePasswordForm'

export const ChangePassword = (props) => {
  return (
    <>
        <Header/>
        <ChangePasswordForm/>
        <Footer/>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)