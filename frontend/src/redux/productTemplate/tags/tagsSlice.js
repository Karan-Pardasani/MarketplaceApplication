import { createReducer, createSlice } from "@reduxjs/toolkit";
import { addTags } from "../../actions";

const addTagsFunc = (state, action) => {
  
}

export const TagsReducer = createReducer({}, (builder) => {
  builder.addCase(addTags, addTagsFunc);
});

// export const tagsSlice = createSlice({
//   name: "tags",
//   initialState: [],
//   reducers: {
//     addtag: (state, action) => {

//     },
//     removetag: (state, action) => {

//     }
//   }
// });

// export const {addtag, removetag} = tagsSlice.actions;

// export default tagsSlice.reducer;