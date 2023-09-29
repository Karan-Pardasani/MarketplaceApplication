import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import store from '../../redux/store';
import { addFlashMessage } from '../../redux/actions';
import { setToken } from '../../redux/actions';

async function registerUser(data){

    const {firstname, lastname, email, password} = data; 
    const { REACT_APP_BACKEND_URL } = process.env;
    const result = await $.post({
        url: `${REACT_APP_BACKEND_URL}/api/v1/auth/register`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        })
    }).then((response, textStatus, jqxhr) => {
        response.status = jqxhr.status;
        return response;

    }).catch((error) => {
        store.dispatch(addFlashMessage({
            message: (error.responseJSON && error.responseJSON.message ? error.responseJSON.message : "There is some error. Please contact the site admin."),
            type: "error"
        }));
        return error.responseJSON;
    });
    return result;
}

async function loginUser(data){
    const { username, password } = data;
    const { REACT_APP_BACKEND_URL } = process.env;

    const result = await $.post({
        url: `${REACT_APP_BACKEND_URL}/api/v1/auth/authenticate`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            email: username,
            password
        })
    }).then((response, textStatus, jqxhr) => {
        response.status = jqxhr.status;
        return response;
    }).catch((error) => {
        store.dispatch(addFlashMessage({
            message: (error.responseJSON && error.responseJSON.message ? error.responseJSON.message : "There is some error. Please contact the site admin."),
            type: "error"
        }));
        return error.responseJSON;
    });
    return result;
}

function logout() {
    localStorage.removeItem("token");
    store.dispatch(setToken({token: null}));

}

export { registerUser, loginUser, logout }