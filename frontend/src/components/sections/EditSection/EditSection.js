import { render } from '@testing-library/react';
import React from 'react'
import CarouselEditSection from './CarouselEditSection';
import FormEditSection from './FormEditSection';
import TableEditSection from './TableEditSection';
import TextEditorEditSection from './TextEditorEditSection';
import { connect } from 'react-redux';

function EditSection(props) {
  const {section} = props;
  // const {section, selectedSection, addImages, updateImage, addGroup, addField} = props;
  var renderEditSection = null;

  switch (section.section_type) {
    case "carousel":
      renderEditSection = () => {
        return <CarouselEditSection
            section={section}/>
      }
      break;
    
    case "form":
      renderEditSection = () => {
        return <FormEditSection
          section={section}/>
      }
      break;
    
    case "table":
      renderEditSection = () => {
        return <TableEditSection
          section={section}/>
      }
      break;
    
    case "text_editor":
      renderEditSection = () => {
        return <TextEditorEditSection
          section={section}/>
      }
      break;

    default:
      break;
  }
  return renderEditSection();
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditSection);