import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItems({ title, subTitle, image, onPress, IconComponent, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.Ligth}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.DestailsContainer}>
                        <AppText style={styles.title} >{title}</AppText>
                        {subTitle && <AppText style={styles.subtitle} >{subTitle}</AppText>}
                    </View>
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
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    DestailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        color: colors.medium,
    }
})

export default ListItems;