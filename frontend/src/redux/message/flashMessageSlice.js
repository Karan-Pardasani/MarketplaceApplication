import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import store from "../store";
import { REMOVE_FLASH_MESSAGE_ACTION } from "../constants";
export const flashMessageSlice = createSlice({
    name: "flashMessage",
    // array will contain objects for the following format
    //{
    //  message: Message to be displayed in the FlashMessage
    //  position: The position of the message to be display (Default: TOP_CENTER)
    // type: "error", "success", "info"
    //}
    initialState:[

    ],
    reducers:{
        addFlashMessage: (state, action) => {
            // the payload will contain id and message
            var message_id = uuidv4();
            state.push({...action.payload, id: message_id});
            setTimeout(() => {
                
                store.dispatch({
                    type: REMOVE_FLASH_MESSAGE_ACTION, 
                    id: message_id
                });

            }, 5);
        },
        removeFlashMessage: (state, action) => {
            state.splice(state.findIndex((element) => element.id === action.id),1);
        }
    }
})

export const { addFlashMessage, removeFlashMessage} = flashMessageSlice.actions

export default flashMessageSlice.reducer