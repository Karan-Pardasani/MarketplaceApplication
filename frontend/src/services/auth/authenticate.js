import $ from 'jquery';


function registerUser(data){
    const {firstname, lastname, username, password} = data; 
    $.ajax(`${REACT_APP_BACKEND_URL}/api/v1/auth/register`,{
        type: 'POST',
        data: {
            firstname,
            lastname,
            username,
            password
        },
        success: function(data, status, xhr){

        }
    });
}