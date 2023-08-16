import { createSlice, current } from "@reduxjs/toolkit";


export const flashMessageSlice = createSlice({
    name: "flashMessage",
    initialState:[

    ],
    reducers:{
        addFlashMessage: (state, action) => {
            // the payload will contain id and message
            console.log("((((())))))");
            state.push(action.payload);
            console.log(current(state))
        },
        removeFlashMessage: (state, action) => {
            console.log("@@@@@@@@@@@@@@@@@@@@@");
            console.log(current(state));
            state.splice(state.findIndex((element) => element.id === action.id),1);
            console.log(current(state));
        }
    }
})

export const { addFlashMessage, removeFlashMessage} = flashMessageSlice.actions

export default flashMessageSlice.reducer