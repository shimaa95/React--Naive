import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItems from '../components/ListItems';
import colors from '../config/colors';

function ListingDetailsScreen() {
    return (
        <View>
            <Image source={require('../assets/jacket.jpg')} style={styles.image} />
            <View style={styles.DetailsContainer}>
                <AppText style={styles.title} >Red Jacket </AppText>
                <AppText style={styles.price}>100$</AppText>
                <View style={styles.ListContainer}>
                    <ListItems
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hemdani"
                        subTitle="5 Listing" />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    DetailsContainer: {
        padding: 20,
    },
    title: {
        fontWeight: "500",
        fontSize: 25,

    },
    price: {
        color: colors.secoundery,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    ListContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;