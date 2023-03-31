import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup'
import AppPicker from '../components/AppPicker';

import { AppForm,FormInputField,ErrorMessage,AppFormPIcker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const ValidationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label('Title'),
    price:Yup.number().required().min(1).max(10000).label('Price'),
    description:Yup.string().label('Description'),
    category:Yup.object().required().nullable().label('Category')
});

const categories=[
    {lable:"Furniture",value:1},
    {lable:"Clothing",value:2},
    {lable:"Camera",value:3}
];

function ListingEdidScreen() {
    return (
       <>
       <Screen style={styles.container}>
        <AppForm
        initialValues={{
            title:"",
            price:"",
            description:"",
            category:null
        }}

        onSubmit={(values)=>console.log(values)}
        validationSchema={ValidationSchema}
        >
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
        marginHorizontal:20
    }
})
export default ListingEdidScreen;