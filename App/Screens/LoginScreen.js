import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import Screen from '../components/Screen';
import AppText from '../components/AppText';


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
                onSubmit={values => console.log(values)}
                validationSchema={validationSChema}
            >

                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppInputText icon='email' placeholder='Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            onChangeText={handleChange("email")}
                        />
                        <AppText style={{ color: 'red' }}>{errors.email}</AppText>
                        <AppInputText icon='lock' placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            onChangeText={handleChange("password")}
                        />
                        <AppText style={{ color: 'red' }}>{errors.password}</AppText>
                        <AppButton title='Login' onPress={handleSubmit} />
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