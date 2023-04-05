import React,  { useEffect ,useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Yup from 'yup'

import { AppForm,FormInputField,ErrorMessage,AppFormPIcker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import ImagePickerForm from '../components/forms/ImagePickerForm';
import useLocation from '../components/hooks/useLocation';

const ValidationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label('Title'),
    price:Yup.number().required().min(1).max(10000).label('Price'),
    description:Yup.string().label('Description'),
    category:Yup.object().required().nullable().label('Category'),
    images:Yup.array().min(1,"Please Select at least one image")
});

const categories=[
    {lable:"Furniture",value:1},
    {lable:"Clothing",value:2},
    {lable:"Camera",value:3}
];

function ListingEdidScreen() {
 const location = useLocation();
    return (
       <>
       <Screen style={styles.container}>
        <AppForm
        initialValues={{
            title:"",
            price:"",
            description:"",
            category:null,
            images:[],
        }}

        onSubmit={(values)=>console.log(location)}
        validationSchema={ValidationSchema}
        >
     <ImagePickerForm name='images'/> 
 <FormInputField maxLength={255} name='title' placeholder='Title'/>
 <FormInputField keyboardType="numeric" maxLength={8} name="price" placeholder='Price' width={120}/>
 <AppFormPIcker  items={categories} placeholder='Category' name='category' width={50}/>
 <FormInputField multiline maxLength={255} name="description" placeholder='Description' numberOfLines={3}/> 
<SubmitButton title="Post" />
        </AppForm>
       </Screen>
       </>

    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
       
    }
})
export default ListingEdidScreen;