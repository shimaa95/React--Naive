import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';


function WelcomeScreen(props) {

    return (
        <ImageBackground style={styles.background} blurRadius={10}
            source={require('../assets/background.jpg')}  >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.Taglain}>Sell What you Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color='secoundery' />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },


    buttonsContainer: {
        width: "100%",
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    Taglain: {
        paddingVertical: 20,
        fontWeight: 600,
        fontSize: 20,

    }



})


export default WelcomeScreen;