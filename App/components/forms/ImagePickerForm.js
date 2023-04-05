import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputListing from '../ImageInputListing';
import ErrorMessage from './ErrorMessage';



function ImagePickerForm({name}) {
    
    const {errors,setFieldValue,touched,values} =useFormikContext();

    const handleAdd = (uri) =>{
        setFieldValue(name,[...values[name],uri]);
      }
      const handleRemove = (uri) => {
        setFieldValue(name,values[name].filter(imageuri => imageuri !== uri));
      }
   return (
    <>
    <ImageInputListing imageUris={values[name]}
    onAddImage={handleAdd}
    onRemoveImage={handleRemove}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]}/>


    </>
  );
}


export default ImagePickerForm;