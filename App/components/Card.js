import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.imageStyle} />
            <View style={styles.DetailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'

    },
    imageStyle: {
        width: "100%",
        height: 200,
    },
    DetailsContainer: {
        padding: 20,

    },
    title: {
        paddingBottom: 7,
        fontWeight: "500",
    },
    subtitle: {
        fontWeight: 'bold',
        color: colors.secoundery
    }
})

export default Card;
