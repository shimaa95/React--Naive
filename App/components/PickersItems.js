import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickersItems({ lable, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>
                {lable}
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})
export default PickersItems;