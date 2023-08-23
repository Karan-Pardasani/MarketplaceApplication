import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import UserProfile from '../components/userProfile/userProfile'
import EditUserProfile from '../components/forms/editUserProfile/editUserProfile'

function UserProfilePage(props) {

  return (
    <>
        <Header/>
          {
            (props.edit) ? <EditUserProfile/> : <UserProfile/>
          }
        <Footer/>
    </>
  )
}

export default UserProfilePage