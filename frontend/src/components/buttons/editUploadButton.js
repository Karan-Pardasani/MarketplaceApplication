import React from 'react'
import { UploadButton } from "@bytescale/upload-widget-react";
import { Pencil } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
const options = {
  apiKey: "free", // Get API keys from: www.bytescale.com
  maxFileCount: 1
};

function EditUploadButton(props) {
  const {callbackFunc} = props;
  return (
    <UploadButton 
      options={options}
      onComplete={
        files => {callbackFunc(files)}
      }>
      {
        ({onClick}) =>
          <Button size='sm' variant="warning" onClick={onClick}>
            <Pencil/>
          </Button>
      }
    </UploadButton>
  )
}

export default EditUploadButton