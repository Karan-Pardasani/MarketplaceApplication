import $ from 'jquery';
import React from 'react'

async function registerUser(data){

    const {firstname, lastname, email, password} = data; 
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
            email,
            password
        })
    }).then((response) => {

        return response;

    }).catch((error) => {
        return error.responseJSON;
    });
    return result;
}

export { registerUser }