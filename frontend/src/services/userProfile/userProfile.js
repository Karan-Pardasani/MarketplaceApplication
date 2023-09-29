import $ from 'jquery';
import store from '../../redux/store';
import { addFlashMessage } from '../../redux/actions';

async function getCurrentUserProfile(){
    const { REACT_APP_BACKEND_URL } = process.env;
    const token = store.getState().user.auth.token;
    const result = await $.get({
        url: `${REACT_APP_BACKEND_URL}/user-profile`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then((response, textStatus, jqxhr)=>{
        response.status = jqxhr.status;
        return response;
    }).catch((error)=>{
        store.dispatch(addFlashMessage({
            message: (error.responseJSON && error.responseJSON.message ? error.responseJSON.message : "There is some error. Please contact the site admin."),
            type: "error"
        }));
        return error.responseJSON;
    });
    return result;
}

async function getUserProfile(data){
    const { REACT_APP_BACKEND_URL } = process.env;
    const {id} = data;
    const token = store.getState().user.auth.token;
    const result = await $.get({
        url: `${REACT_APP_BACKEND_URL}/user-profile`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            id: id
        }
    }).then((response, textStatus, jqxhr) => {
        response.status = jqxhr.status; 
        return response;
    }).catch((error)=>{
        store.dispatch(addFlashMessage({
            message: (error.responseJSON && error.responseJSON.message ? error.responseJSON.message : "There is some error. Please contact the site admin."),
            type: "error"
        }));
        return error.responseJSON;
    });
    return result;
}

async function updateUserProfile(data){
    const { REACT_APP_BACKEND_URL } = process.env;
    const token = store.getState().user.auth.token;
    const result = await $.post({
        url: `${REACT_APP_BACKEND_URL}/user-profile/update`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: JSON.stringify(data)
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

export {getCurrentUserProfile, getUserProfile, updateUserProfile}