import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './productTemplate.css'
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import SectionOptionsModal from '../modals/sectionOptionsModal';
import Sections from '../sections/Sections';

function ProductTemplate() {

  const [showModal, setShowModal] = useState(false);

  const { control, register, handleSubmit, formState: {errors}, setValue } = useForm({
    defaultValues: {
      tags: []
    }
  });

  const {fields: tags, append: appendTag, remove: removeTag} = useFieldArray({
    name: "tags",
    control,
  });

  const [SectionDetails, setSectionDetails] = useState([]);// https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
  const {fields: sections, append: appendSection, remove: removeSection} = useFieldArray({
    name: "sections",
    control,
  });
  
  const AddSection = (data) => {
    console.log("Add Section");
    console.log(data);
    var newSection = {
      section_title: data.section_title,
      section_type: data.section_type,
      section_order: data.section_order
    };
    setSectionDetails([
      ...SectionDetails,
      newSection
    ]);
    console.log("newSections");
    console.log(newSection);
    console.log(SectionDetails);
  }

  const onSubmit = (data) => {
    console.log(`****data: ${data}`);
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
                              <Button variant='success' onClick={() => {setShowModal(true);}}>
                                  <p>Add Section +</p>
                              </Button>
                            </div>
                            <Sections/>
                            <div className='text-right'>
                                <button className='btn btn-primary'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
      <SectionOptionsModal
        showModal = {showModal}
        setShowModal = {setShowModal}
        setNewSectionDetails = {setSectionDetails}
        addSection={AddSection}/>
    </>
  )
}

export default ProductTemplate