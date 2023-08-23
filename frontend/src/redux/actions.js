// functions to create objects required to dispatch actions from outside React Components.

function addFlashMessage(payload){
    return {
        type: "flashMessage/addFlashMessage",
        payload
    }
}

function setToken(payload){
    return {
        type: "auth/setToken",
        payload
    }
}

export {addFlashMessage, setToken}