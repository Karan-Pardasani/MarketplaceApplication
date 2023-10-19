import { render } from '@testing-library/react';
import React from 'react'
import CarouselEditSection from './CarouselEditSection';
import FormEditSection from './FormEditSection';
import TableEditSection from './TableEditSection';
import TextEditorEditSection from './TextEditorEditSection';

function EditSection(props) {
  const {section, selectedSection, addImages, updateImage} = props;
  var renderEditSection = null;

  switch (section.section_type) {
    case "carousel":
      renderEditSection = () => {
        return <CarouselEditSection
            section={section}
            selectedSection={selectedSection}
            addImages={addImages}
            updateImage={updateImage}
          />
      }
      break;
    
    case "form":
      renderEditSection = () => {
        return <FormEditSection
          section={section}
          selectedSection={selectedSection}
        />
      }
      break;
    
    case "table":
      renderEditSection = () => {
        return <TableEditSection
          section={section}
          selectedSection={selectedSection}
        />
      }
      break;
    
    case "text_editor":
      renderEditSection = () => {
        return <TextEditorEditSection
          section={section}
          selectedSection={selectedSection}
        />
      }
      break;

    default:
      break;
  }
  return renderEditSection();
}

export default EditSection;