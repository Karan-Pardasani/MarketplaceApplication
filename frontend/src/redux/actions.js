// functions to create objects required to dispatch actions from outside React Components.

import { createAction, createReducer } from "@reduxjs/toolkit"
import { 
  CAROUSEL_ADD_IMAGE_ACTION, 
  ADD_FLASH_MESSAGE_ACTION, 
  ADD_SECTION, SET_TOKEN_ACTION,
  ADD_TAGS, 
  UPDATE_SECTION,
  CAROUSEL_UPDATE_IMAGE_ACTION,
  CAROUSEL_REMOVE_IMAGE_ACTION,
  TEXTEDITOR_CONTENT_UPDATE_ACTION,
  ADD_GROUP_FORM_SECTION,
  ADD_FIELD_FORM_SECTION
} from "./constants"

// APPLICATION ACTIONS
const addFlashMessage = createAction(ADD_FLASH_MESSAGE_ACTION);
const setToken = createAction(SET_TOKEN_ACTION);

// PRODUCT TEMPLATE FORM ACTIONS
const updateSection = createAction(UPDATE_SECTION);
const addSection = createAction(ADD_SECTION);
const addTags = createAction(ADD_TAGS);

// CAROUSEL SECTION ACTIONS
const addCarouselImageAction = createAction(CAROUSEL_ADD_IMAGE_ACTION);
const updateCarouselImageAction = createAction(CAROUSEL_UPDATE_IMAGE_ACTION);
const removeCarouselImageAction = createAction(CAROUSEL_REMOVE_IMAGE_ACTION);


// TEXT EDITOR SECTION ACTIONS
const updateContentTextEditorAction = createAction(TEXTEDITOR_CONTENT_UPDATE_ACTION);

// FORM SECTION ACTIONS
const addGroupFormAction = createAction(ADD_GROUP_FORM_SECTION);
const addFieldFormAction = createAction(ADD_FIELD_FORM_SECTION);

// function addFlashMessage(payload){
//     return {
//         type: ADD_FLASH_MESSAGE_ACTION,
//         payload
//     }
// }

// function setToken(payload){
//     return {
//         type: SET_TOKEN_ACTION,
//         payload
//     }
// }

export {
  addFlashMessage, 
  setToken, 
  updateSection, 
  addCarouselImageAction,
  addSection,
  addTags,
  updateCarouselImageAction,
  removeCarouselImageAction,
  updateContentTextEditorAction,
  addGroupFormAction,
  addFieldFormAction
}