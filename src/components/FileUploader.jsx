import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';




const FileUploader = props => {


  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();

  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
		//const fileUploaded = event.target.files[0];
		//const fileUploaded = URL.createObjectURL(event.target.files[0])
		const data = {
			preview: URL.createObjectURL(event.target.files[0]),
			raw: event.target.files[0]
		};
		
    props.handleFile(data);
  };
  return (
    <>
      <Button type="click" color="secondary" variant="contained" onClick={handleClick}>
        <AddAPhotoIcon/>
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />
    </>
  )
	}






	 
export default FileUploader;

