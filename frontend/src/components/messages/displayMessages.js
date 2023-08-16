import {toast} from "react-toastify";
import { addFlashMessage, removeFlashMessage } from "../../redux/message/flashMessageSlice";
import {connect} from 'react-redux';

function MessageComponent({messages}){
    messages.forEach(element => {
            switch(element.type){
                case "success":
                    console.log("success!!");
                    toast.success(element.message, {
                        position: element.position || toast.POSITION.TOP_CENTER
                    });
                    ;
                case "error":
                    console.log("error!!");
                    toast.error(element.message, {
                        position: element.position || toast.POSITION.TOP_CENTER,
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    break;
                case "info":
                    console.log("info!!");
                    toast.info(element.message, {
                        position: element.position || toast.POSITION.TOP_CENTER
                    });
                default:
                    console.log("default!!");
                    toast.info(element.message,{
                        position: element.position || toast.POSITION.TOP_CENTER
                    })
            }
    });
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, null)(MessageComponent)