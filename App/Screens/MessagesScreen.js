import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ItemSperator from '../components/ItemSperator';
import ListItems from '../components/ListItems';
import ListItemsDeleteAction from '../components/ListItemsDeleteAction';
import Screen from '../components/Screen';


const initailMessages = [
    {
        id: 1,
        tittle: 'T1',
        description: 'Decriptions',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        tittle: 'T2',
        description: 'Decriptions2',
        image: require('../assets/mosh.jpg'),
    },
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initailMessages);

    const handleDelete = message => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItems title={item.tittle}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('message', item)}
                        renderRightActions={() =>
                            <ListItemsDeleteAction onPress={() => handleDelete(item)} />}

                    />
                )}

                ItemSeparatorComponent={ItemSperator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;