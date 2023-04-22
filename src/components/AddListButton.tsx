import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { nanoid } from 'nanoid';

const FloatingActionButton = ({ items, onAddListItem }) => {

    const handlePress = () => {
        const newItem = { id: nanoid(), name: `Item ${items.length + 1}` };
        onAddListItem(newItem);
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePress} >
                <Feather name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FloatingActionButton;

