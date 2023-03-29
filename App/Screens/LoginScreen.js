import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import FormInputField from '../components/FormInputField';
import SubmitButton from '../components/SubmitButton';


const validationSChema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.Logo} />
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSChema}
                onSubmit={(values)=>console.log(values)}
            >

                {() => (
                    <>
                        <FormInputField icon='email' placeholder='Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            name="email"
                        
                        />

                        <FormInputField icon='lock' placeholder='Password'
                            autoCapitalize='none'
                            name="password"
                            autoCorrect={false}
                            textContentType='password'
                            
                            secureTextEntry
                          
                        />
                        <SubmitButton title='Login' />
                    </>
                )}

            </Formik>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    Logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    }
})

export default LoginScreen;