import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Switch, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { Platform, TextInput } from 'react-native';
import ListItem from './ListItem';

const AddTaskList = ({ visible, setVisible }) => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('transparent');
    const [toggleColor, setToggleColor] = useState('darkblue');
    const [saveButtonColor, setSaveButtonColor] = useState('darkblue');

    const colors = ['#1b332d', '#365544', '#aab5af'];

    const handleColorChange = (newColor) => {
        setColor(newColor);
        setToggleColor(newColor);
        setSaveButtonColor(newColor);
    };

    const handleSave = () => {
        onSave(title); // Call the onSave function passed as prop with the title
        setVisible(false);
    }


    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
            overlayStyle={styles.overlay}
            animationType='slide'
        >
            <View style={styles.header}>
                <TouchableOpacity style={styles.closeIcon} onPress={() => setVisible(false)}>
                    <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Add List</Text>
                <TouchableOpacity style={styles.saveIcon} onPress={() => alert('Save')}>
                    <Feather name="save" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={styles.textTitle}>List Name</Text>
            <TextInput
                style={[styles.textInput, { fontWeight: title.length > 0 ? 'bold' : 'normal' }]}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />

            <Text style={styles.textColor}>Color</Text>
            <View style={styles.colorPalette}>
                {colors.map((color) => (
                    <TouchableOpacity
                        key={color}
                        style={[styles.colorButton, { backgroundColor: color }]}
                        onPress={() => handleColorChange(color)}
                    />
                ))}
            </View>
        </Overlay>
    );
}; 


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        marginTop: -700,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    closeIcon: {
        marginRight: 10,
    },
    saveIcon: {
        marginLeft: 10,
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15,
        margin: 10,
    },
    textColor: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    },
    textInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 10,
    },
    colorPalette: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: -3,
        marginHorizontal: 10,
    },
    colorButton: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 5,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '93%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AddTaskList;
