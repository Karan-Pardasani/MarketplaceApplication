import $ from 'jquery';


function registerUser(data){
    console.log(data);
    const {firstname, lastname, username, password} = data; 
    const { REACT_APP_BACKEND_URL } = process.env;
    $.ajax(`${REACT_APP_BACKEND_URL}/api/v1/auth/register`,{
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
        }),
        success: function(data, status, xhr){
            console.log(data);
        }
    });
}

export { registerUser }