import { createReducer } from "@reduxjs/toolkit";
import { addFieldFormAction, addGroupFormAction } from "../../actions";

const addGroupFunc = (state, action) => {
  const payload = action.payload;
  const {index} = payload;
  const group_length = state.sections[index].groups.length;
  state.sections[index].groups.push({
    group_title: "",
    fields: [],
    index: group_length
  });
}

const addFieldFunc = (state, action) => {
  const payload = action.payload;
  console.log(action);
  const {section_index, group_index} = payload;
  const fields_length = state.sections[section_index].groups[group_index].fields.length;
  state.sections[section_index].groups[group_index].fields.push({
    title: "",
    width: 0,
    field_type: "text",
    options: "",
    editable: false,
    index: fields_length
  });
}

export const FormSectionReducers = createReducer({}, (builder) => {
  builder.addCase(addGroupFormAction, addGroupFunc);
  builder.addCase(addFieldFormAction, addFieldFunc);
});