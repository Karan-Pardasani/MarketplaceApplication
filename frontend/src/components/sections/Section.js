import React from 'react'
import CarouselSection from './CarouselSection/CarouselSection';
import FormSection from './FormSection/FormSection';
import TableSection from './TableSection/TableSection';
import TextEditorSection from './TextEditorSection/TextEditorSection';
import { connect } from 'react-redux';

function Section(props) {

  // const {section, addImages, index, updateImage} = props;

  const {section, index} = props;
  const section_type = section.section_type;
  
  let SectionToRender = null;

  switch (section_type) {

    case "carousel":
      SectionToRender = () => {
        return (
        <CarouselSection  
          section={section}
          index={index}/>)};
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
      SectionToRender = () => {
        return (
          <h5>Not implemented yet!!</h5> 
        )};
      break;
  }
  return <SectionToRender/>
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Section)