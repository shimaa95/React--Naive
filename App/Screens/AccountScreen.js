import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import Icon from '../components/Icon';
import ItemSperator from '../components/ItemSperator';

import ListItems from '../components/ListItems';
import Screen from '../components/Screen';
import colors from '../config/colors';


const menuItems = [{
    title: "My Listings",
    icon: {
        name: 'format-list-bulleted',
        backgroundColor: colors.Primary,
    },
},
{
    title: "My Messages",
    icon: {
        name: 'email',
        backgroundColor: colors.secoundery
    }
}]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>

                <ListItems title="Mosh Hamidani"
                    subTitle="programmigwithmosh@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) =>
                        <ListItems
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />
                    }
                    ItemSeparatorComponent={ItemSperator}


                />
            </View>

            <View style={styles.container}>
                <ListItems title="Log Out"
                    IconComponent={<Icon name="logout" backgroundColor='#ffe66d' />} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.Ligth,
    }
})

export default AccountScreen;