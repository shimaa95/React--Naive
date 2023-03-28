import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ItemSperator() {
    return (
        <View style={styles.sperator}>

        </View>
    );
}

const styles = StyleSheet.create({
    sperator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.Ligth,

    }
})
export default ItemSperator;