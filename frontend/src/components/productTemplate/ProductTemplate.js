import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './productTemplate.css'
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import SectionOptionsModal from '../modals/sectionOptionsModal';
import Sections from '../sections/Sections';
import { create_new_section } from '../../services/sections/sections_helper';
function ProductTemplate() {

  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(-1);
  const [resetForm, setResetForm] = useState(false);

  const { control, register, handleSubmit, formState: {errors}, setValue } = useForm({
    defaultValues: {
      tags: []
    }
  });

  const {fields: tags, append: appendTag, remove: removeTag} = useFieldArray({
    name: "tags",
    control,
  });

  const [sectionDetails, setSectionDetails] = useState([]);// https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
  const {fields: sections, append: appendSection, remove: removeSection} = useFieldArray({
    name: "sections",
    control,
  });
  const editSection = (id) => {
    // function to open edit Section Modal
    setSelectedSection(id);
    setShowModal(true);
    setResetForm(!resetForm);
  }

  const addImages = (files, idx) => {
    // Function used to add images in the carousel and idx is the index of the carousel section
    var temp = [...sectionDetails];
    var newTemp = temp.map((section, index) => {
      console.log("section: ",section);
      console.log("index: ", index);
      if(index === idx){
        files.map((x, index) => {
          section.carousel_items.push({
            file_url: x.fileUrl,
            order:    index,
            remove: false
          });
          console.log("section");
          console.log(section);
        });
      }
      return section;
    });
    setSectionDetails(newTemp);
  }

  const updateImage = (action, section_index, image_index, files = null) => {
    // Need to add "edit image" functionality
    if(action === "remove"){
      var temp = [...sectionDetails]
      var image = temp[section_index].carousel_items[image_index];
      image.remove = !image.remove;
      console.log(temp);
      setSectionDetails(temp);
    }else if(action === "edit"){
      var temp = [...sectionDetails];
      var image = temp[section_index].carousel_items[image_index];
      image.file_url = files[0].fileUrl;
      console.log("edit Image");
      console.log(temp);
      setSectionDetails(temp);
    }
  }

  const updateSection = (data) => {
    // function to update section in the local State in client application
    // Close the modal, reset the states in this function, save the data in sections
    console.log(data);
  }

  const onSubmit = (data) => {
    // API to store data in the backend
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedSection(-1);
  }
  
  
  const addSection = (data) => {
    console.log(data);
    var newSection = {
      section_title: data.section_title,
      section_type: data.section_type,
      section_order: data.section_order
    };
    newSection = create_new_section(newSection);
    setSectionDetails([
      ...sectionDetails,
      newSection
    ]);
    closeModal();
  }

  console.log(errors);

  return (
    <>
      <Header/>
      <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <h4 className=''>Product Template - New</h4>
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">
                                        Title
                                    </label> 
                                    <input 
                                        type="text"  
                                        placeholder="Enter Title" 
                                        {...register("title")} />
                                </div>
                                
                                <div className="form-group col-sm-6 flex-column d-flex"> 
                                    <label className="form-control-label px-3">Tags</label> 
                                    <div className='flex-row'>
                                      <Button variant='success' size='sm' className=' mb-2 add-btn' onClick={() => {
                                        
                                        appendTag({value: ""});

                                      }}>Append</Button>
                                    </div>
                                     {
                                      tags.map((field, index) => {
                                        return (<section key={field.id} className='mt-2'>
                                          <label>
                                            <input
                                              type='text'
                                              {...register(`tags.${index}.value`)}
                                            />
                                            <Button variant='danger ml-2' size='sm' onClick={()=>{removeTag(index)}}>X</Button>
                                          </label>
                                        </section>);
                                      })
                                     }
                                </div>
                            </div>
                            <div className='text-left'>
                              <Button variant='success' onClick={() => {setResetForm(!resetForm);setShowModal(true);}}>
                                  <p>Add Section +</p>
                              </Button>
                            </div>
                            <div>
                              <Sections
                                editSection = {editSection}
                                sections={sectionDetails}
                                addImages={addImages}
                                updateImage={updateImage}
                              />
                            </div>
                            <div className='text-right'>
                                <button className='btn btn-success'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
      <SectionOptionsModal
        addImages = {addImages}
        showModal = {showModal}
        setShowModal = {setShowModal}
        setNewSectionDetails = {setSectionDetails}
        addSection={addSection}
        selectedSection={selectedSection}
        section={selectedSection === -1 ? undefined : sectionDetails[selectedSection]}
        updateSection={updateSection}
        closeModal={closeModal}
        resetForm={resetForm}
        setResetForm={setResetForm}
        updateImage={updateImage}/>
    </>
  )
}

export default ProductTemplate