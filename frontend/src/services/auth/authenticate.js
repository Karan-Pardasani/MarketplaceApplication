import $ from 'jquery';
import React from 'react'

async function registerUser(data){
    console.log(data);
    const {firstname, lastname, username, password} = data; 
    const { REACT_APP_BACKEND_URL } = process.env;
    const result = await $.ajax(`${REACT_APP_BACKEND_URL}/api/v1/auth/register`,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        data: JSON.stringify({
            firstname,
            lastname,
            username,
            password
        })
    }).then((response) => {

        console.log(response);

    }).catch((error) => {
        console.log(error.responseJSON.message);
    });

    return (<></>)
}

export { registerUser }