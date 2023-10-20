import React from 'react'

function FormSection(props) {
  const {section} = props;
  if(section.groups.length == 0){
    return (
      <>
        <i>Click on "Edit" button to add new fields to this form</i>
      </>
    )
  }
  return (
    <>

    </>
  )
}

export default FormSection