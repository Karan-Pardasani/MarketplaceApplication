import { createReducer, current } from "@reduxjs/toolkit";
import {CarouselSectionReducer} from "./CarouselSectionReducers";
import { addSection, updateSection } from "../../actions";
import { EditorState, convertToRaw } from "draft-js";
import { FormSectionReducers } from "./FormSectionReducers";
import { TextEditorSectionReducers } from "./TextEditorSectionReducers";


const addSectionFunc = (state, action) => {
  const payload = action.payload;
  var newSection = {
    section_title: payload.section_title,
    section_type: payload.section_type,
    section_order: payload.section_order,
    section_index: state.sections.length
  };
  switch (payload.section_type) {
    case "carousel":
      newSection = { ...newSection,
        carousel_items: []
      }
      break;
    case "text-editor":
      newSection={ ...newSection,
        content: JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()))
      }
      break;
    case "form":
      newSection={ ...newSection,
        groups: []
      }
      break;
    default:
      break;
  }
  state.sections.push(newSection);
}

const updateSectionFunc = (state, action) => {
  const payload = action.payload;
  var section = state.sections[payload.index];
  section.section_title = payload.section.section_title;
  section.section_order = payload.section.section_order;
}

const filterCarouselActions = (action) => {
  return action.type.includes("carousel");
}

const filterTextEditorActions = (action) => {
  return action.type.includes("text-editor");
}

const filterFormSectionActions = (action) => {
  return action.type.includes("form");
}

export const GeneralSectionReducer = createReducer({}, (builder) => {
  builder.addCase(addSection,addSectionFunc);
  builder.addCase(updateSection, updateSectionFunc)
  builder.addMatcher(filterCarouselActions, CarouselSectionReducer);
  builder.addMatcher(filterTextEditorActions, TextEditorSectionReducers);
  builder.addMatcher(filterFormSectionActions, FormSectionReducers);
});