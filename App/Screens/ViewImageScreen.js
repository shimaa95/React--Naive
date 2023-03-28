import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} ><MaterialCommunityIcons name="close" color={colors.white} size={35} /></View>
            <View style={styles.deleteIcon} >
                <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={35} />
            </View>
            <Image resizeMode='contain' source={require('../assets/chair.jpg')} style={styles.chair} /></View>
    );
}

const styles = StyleSheet.create({
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    chair: {
        width: "100%",
        height: "100%",
        top: 30,
    },
})
export default ViewImageScreen;