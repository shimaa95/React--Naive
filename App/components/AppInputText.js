import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/Styles'
import colors from '../config/colors';

function AppInputText({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: colors.Ligth,
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },




})

export default AppInputText;