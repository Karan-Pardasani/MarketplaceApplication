import $ from 'jquery';
import store from '../../redux/store';
import { addFlashMessage, setToken } from '../../redux/actions';

async function changePassword(data){
    const {password, newPassword, confirmNewPassword} = data;
    const { REACT_APP_BACKEND_URL } = process.env;
    const token = store.getState().user.auth.token;
    console.log(data);
    const result = await $.post({
        url: `${REACT_APP_BACKEND_URL}/user-profile/update-password`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: JSON.stringify(data)
    }).then((response, textStatus, jqxhr)=>{
        response.status = jqxhr.status;
        localStorage.setItem("token", response.token);
        store.dispatch(setToken({
            token: response.token
        }));
        store.dispatch(addFlashMessage({
            message: "Successfully Changed Password",
            type: "success"
        }));

    }).catch((error)=>{
        store.dispatch(addFlashMessage({
            message: error.responseJSON.message,
            type: "error"
        }));
        return error.responseJSON;
    })
}

export {changePassword}