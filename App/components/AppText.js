import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/Styles'

function AppText({ children, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>
            {children}
        </Text>
    );
}



export default AppText;