import { createReducer } from "@reduxjs/toolkit";
import { addCarouselImageAction, removeCarouselImageAction, updateCarouselImageAction } from "../../actions";
import { connect } from "react-redux";

const addImagesFunc = (state, action) => {

  ///////////////////////////
  // payload: {
  //   index: index -- index of carousel section
  //   files: files -- array of fileUrls
  // }
  //////////////////////////
  const payload = action.payload;
  console.log("payload: ");
  console.log(payload);
  var section_index = payload.index;
  var files = payload.files;
  files.map((file, index) => {
    state.sections[section_index].carousel_items.push({
      file_url: file,
      order: index,
      remove: false
    });
  });
}

const updateImageFunc = (state, action) => {
  ///////////////////////////////////
  // section_index: index of the section
  // file: updated fileUrl
  // item_index: index of the carousel item in which we want to update the image
  //////////////////////////////////
  const payload = action.payload;
  const section_index = payload.section_index;
  const file = payload.file;
  const item_index = payload.item_index;
  state.sections[section_index].carousel_items[item_index].file_url = file;
}

const removeImageFunc = (state, action) => {
  /////////////////////////////////
  //  section_index: index of the section
  //  item_index: index of the carousel_item
  ////////////////////////////////
  const payload = action.payload;
  const {section_index, item_index} = payload;
  var curr_remove_value = state.sections[section_index].carousel_items[item_index].remove
  state.sections[section_index].carousel_items[item_index].remove = !curr_remove_value;
}
export const CarouselSectionReducer = createReducer({}, (builder) => {
  builder.addCase(addCarouselImageAction, addImagesFunc);
  builder.addCase(updateCarouselImageAction, updateImageFunc);
  builder.addCase(removeCarouselImageAction, removeImageFunc);
});