import { createReducer } from "@reduxjs/toolkit";
import { updateCarouselImageAction, updateContentTextEditorAction } from "../../actions";


const updateContentFunc = (state, action) => {

  ///////////////////////////////////////////////////
  // content: JSON content of the Editor State
  // index: section_index of the section for which the editorState is being updated
  //////////////////////////////////////////////////

  const payload = action.payload;
  console.log("payload!!!!!!!");
  const {content, index} = payload;
  state.sections[index].content = content;
}

export const TextEditorSectionReducers = createReducer({}, (builder) => {
  builder.addCase(updateContentTextEditorAction, updateContentFunc);
});