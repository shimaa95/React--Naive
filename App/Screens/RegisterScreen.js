import React from 'react';
import { View,StyleSheet } from 'react-native';
import * as Yup from 'yup'

import Screen from '../components/Screen';
import { AppForm, FormInputField, SubmitButton } from '../components/forms';


const ValidationSchema = Yup.object().shape({
    name:Yup.string().required().min(4).label("Name"),
    email:Yup.string().email().required().label("Email"),
    password:Yup.string().required().min(8).label("Password"),
});
function RegisterScreen(props) {

   return (
    <Screen style={styles.container}>
    <AppForm
    initialValues={{name:'', email:'',password:''}}
    validationSchema={ValidationSchema}
    onSubmit={(values)=> console.log(values)}
    >
<FormInputField 
      autoCorrect={false}
      icon="account"
      name="name"
      placeholder="Name"
/>
<FormInputField  name='email' placeholder="Email"
 autoCapitalize='none'
 autoCorrect={false}
 keyboardType='email-address'
 textContentType='emailAddress'
icon="email"
/>
<FormInputField  name='password' placeholder="Password"
 autoCapitalize='none'
 autoCorrect={false}
 textContentType='password'                     
 secureTextEntry
icon="lock"
/>

<SubmitButton title='Register' />
    </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
container:{ 

    padding:10
 },
})
export default RegisterScreen;