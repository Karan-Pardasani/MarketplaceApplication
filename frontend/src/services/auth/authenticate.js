import $ from 'jquery';

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

async function loginUser(data){
    const { username, password } = data;
    const { REACT_APP_BACKEND_URL } = process.env;

    const result = await $.ajax(`${REACT_APP_BACKEND_URL}/api/v1/auth/authenticate`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        data: JSON.stringify({
            email: username,
            password
        })
    }).then((response) => {

        return response;
    }).catch((error) => {

        return error.responseJSON;
    });
    console.log(result);
    return result;
}


export { registerUser, loginUser }