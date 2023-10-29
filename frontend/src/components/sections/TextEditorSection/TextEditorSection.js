import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, KeyBindingUtil, convertFromRaw, convertToRaw, getDefaultKeyBinding } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { connect } from 'react-redux';
import { updateContentTextEditorAction } from '../../../redux/actions';
import { stateToHTML } from 'draft-js-export-html';

function TextEditorSection(props) {

  const {section, updateContent} = props;

  const [editorState, setEditorState] = useState(EditorState.createWithContent(
    convertFromRaw(JSON.parse(section.content))
  ));

  const callbackEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const handleKeyCommand = (command) => {

    if(command === "Save"){
      updateContent({
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())), 
        index: section.section_index
      });
    }

  }

  const keyBindingFn = (event) => {
    if(KeyBindingUtil.hasCommandModifier(event) && event.keyCode === 83){
      return 'Save';
    }
    return getDefaultKeyBinding(event);
  }

  return (
    <>
      <p><i>Press Ctrl+S to save.</i></p>
      <Editor
        editorState={editorState}
        onEditorStateChange={callbackEditorStateChange}
        editorStyle={{border: "1px solid lightgrey"}}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateContent: (payload) => {
      dispatch(updateContentTextEditorAction(payload));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorSection);