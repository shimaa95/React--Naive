import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/Styles'
import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickersItems from './PickersItems';

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {
    const [modelVisiable, setModelVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.lable : placeholder}
                    </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} style={styles.iconApps} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modelVisiable} animationType="slide">
                <Screen>
                    <Button title='close' onPress={() => setModelVisible(false)} />
                    <FlatList data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <PickersItems lable={item.lable} onPress={() => {
                                setModelVisible(false);
                                onSelectItem(item) 
                            }} />
                        } />



                </Screen>
            </Modal>
        </>
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

    text: {
        flex: 1,
    

    }

})

export default AppPicker;