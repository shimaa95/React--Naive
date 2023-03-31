import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItems({ title, subTitle, image, onPress, IconComponent, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.Ligth}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.DestailsContainer}>
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText style={styles.subtitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color ={colors.medium}name='chevron-right' size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems:'center'
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    DestailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex:1
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        color: colors.medium,
    }
})

export default ListItems;