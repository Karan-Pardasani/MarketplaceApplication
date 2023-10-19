import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function TextEditorSection() {
  console.log(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={setEditorState}
      
    />
  )
}

export default TextEditorSection