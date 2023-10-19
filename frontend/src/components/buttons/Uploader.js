import React from 'react'
import { UploadButton } from "@bytescale/upload-widget-react";
const options = {
  apiKey: "free", // Get API keys from: www.bytescale.com
  maxFileCount: 10
};

function Uploader(props) {
  const {callbackFunc} = props;
  return (
    <UploadButton 
      options={options}
      onComplete={
        files => {callbackFunc(files)}
      }>
      {
        ({onClick}) =>
          <button onClick={onClick}>
            Upload a file...
          </button>
      }
    </UploadButton>
  )
}

export default Uploader