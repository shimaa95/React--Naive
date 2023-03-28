import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "Red Jacket for sell",
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: "Couch In a good condition",
        price: 1000,
        image: require('../assets/couch.jpg'),
    },

]

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                extraData={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />


        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.Ligth,

    }
})

export default ListingScreen;