import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import { Text } from 'react-native';

function AppFormPIcker({items,placeholder,name,width}) {
    const {errors,setFieldValue,touched,values} =useFormikContext();
    return (
        <>

<AppPicker 
items={items}
placeholder={placeholder}
onSelectItem={(item)=> setFieldValue(name,item)}
selectedItem={values[name]}
width={width}
/>

<ErrorMessage error={errors[name]} visible={touched[name]}/>

        </>
    );
}

export default AppFormPIcker;