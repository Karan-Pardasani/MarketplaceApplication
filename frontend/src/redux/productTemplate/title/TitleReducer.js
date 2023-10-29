import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
  name: "title",
  initialState: "",
  reducers: {
    changeTitle: (state, action) => {
      
    }
  }
});

export const {changeTitle} = titleSlice.actions;

export default titleSlice.reducer;