import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  Button, Switch } from 'react-native';
import { VStack, useColorModeValue } from 'native-base';
import AnimatedColorBox from '../components/AnimatedColorBox';
import MastHead from '../components/MastHead';
import NavBar from '../components/NavBar';
import { Platform, TextInput } from 'react-native';


function TaskDetail() {


    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [isPriority, setIsPriority] = useState(false);
    
    const [color, setColor] = useState('transparent');
    const [toggleColor, setToggleColor] = useState('darkblue');
    const [saveButtonColor, setSaveButtonColor] = useState('darkblue');

    const handleColorChange = (newColor) => {
        setColor(newColor);
        setToggleColor(newColor);
        setSaveButtonColor(newColor);
    }

    const colors = [
        '#1b332d', '#365544', '#aab5af'
    ];

    return (
        <AnimatedColorBox
            flex={1}
            bg={useColorModeValue('warmGray.50', 'primary.900')}
            w="full"
        >
            <MastHead
                title="Add Plan"
                image={require('../assets/images/background.jpg')}
            >
                <NavBar />
            </MastHead>
            <VStack
                flex={1}
                space={1}
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-80px"
                borderTopLeftRadius="20px"
                borderTopRightRadius="20px"
                pt="20px"
                position={'relative'}
            >
                <Text style={styles.textHeader}>Date and Time</Text>


                <Text style={styles.textTitle}>Title</Text>
                <TextInput 
                    style={[styles.textInput, { fontWeight: title.length > 0? 'bold' : 'normal' }]}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />


                <Text style={styles.textTitle}>Note</Text>
                <TextInput
                    style={[styles.textInput, { fontWeight: note.length > 0 ? 'bold' : 'normal' }]}
                    value={note}
                    onChangeText={(text) => setNote(text)}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.textPriority}>Priority</Text>
                        <Text style={styles.textDescription}>prioritize your schedule</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 11,
                        marginRight: 22,
                        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],

                    }}>
                        <Switch 
                            value={isPriority} 
                            onValueChange={setIsPriority}
                            trackColor={{ false: 'gray', true: toggleColor }}
                            
                        />
                    </View>
                </View>


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
                


                <View style={{
                    backgroundColor: saveButtonColor,
                    marginTop: 50,
                    marginLeft: 290,
                    marginRight: 27,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 10,
                    shadowOpacity: 0.11,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    }
                }}>
                    <Button
                        title="Save"
                        onPress={() => alert('Save')}
                        color="white"
                    />
                </View>


            </VStack>
        </AnimatedColorBox>
    );
    
}

const styles = StyleSheet.create({
    textHeader: {
        fontWeight: 'bold',
        fontSize: 22,
        padding: 10,
        marginLeft: 16
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15,
        padding: 10,
        marginLeft: 16
    },
    textPriority: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        marginTop: 30,
        marginLeft: 16
    },
    textDescription: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 12,
        padding: 10,
        marginTop: -10,
        marginLeft: 16
    },
    textColor: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        marginLeft: 16
    },
    textInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginLeft: 27,
        marginRight: 27,
    },
    colorPalette: {
        marginRight: 283,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: -3,
    },
    colorButton: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 5,
    },

});

export default TaskDetail