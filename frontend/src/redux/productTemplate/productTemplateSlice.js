import {createReducer } from "@reduxjs/toolkit";
import { GeneralSectionReducer } from "./sections/sectionsSlice";
import { TagsReducer } from "./tags/tagsSlice";
import { TextEditorSectionReducers } from "./sections/TextEditorSectionReducers";


const initialState = {
  title: "",
  sections: [],
  tags: []
}

const filterSectionsActions = (action) => {
  return action.type.includes("sections");
}

const filterTagsActions = (action) => {
  return action.type.includes("tags");
}

const filterTextEditorActions = (action) => {
  console.log("filterTextEditorActions");
  console.log(action.type);
  return action.type.includes("text-editor");
}

export const productTemplateReducer = createReducer(initialState, (builder) => {
  builder.addMatcher(filterTagsActions, TagsReducer)
  builder.addMatcher(filterSectionsActions, GeneralSectionReducer);
  builder.addMatcher(filterTextEditorActions, TextEditorSectionReducers);
});