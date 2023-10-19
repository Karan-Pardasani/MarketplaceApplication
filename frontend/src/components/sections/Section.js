import React from 'react'
import CarouselSection from './CarouselSection/CarouselSection';
import FormSection from './FormSection/FormSection';
import TableSection from './TableSection/TableSection';
import TextEditorSection from './TextEditorSection/TextEditorSection';

function Section(props) {

  const {section, addImages, index, updateImage} = props;

  let SectionToRender = null;

  switch (section.section_type) {

    case "carousel":
      SectionToRender = () => {
        return (
        <CarouselSection 
          section={section} 
          addImages={addImages} 
          index={index}
          updateImage={updateImage}/>)};
      break;

    case "form":
      SectionToRender = () => {return (
        <FormSection section={section}/>
      )};
      break;

    case "table":
      SectionToRender = () => {
        return (
          <TableSection 
            section={section}/>
        )};
      break;

    case "text-editor":
      SectionToRender = () => {
        return (
          <TextEditorSection 
            section={section}/>
        )};
      break;

    default:
      break;
  }
  return <SectionToRender/>
}

export default Section