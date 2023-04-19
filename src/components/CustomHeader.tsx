import React from 'react';
import { TouchableOpacity, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../assets/images/background.jpg');

const CustomHeader = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.openDrawer();
    };

    return (
        <View style={{height: 160}}>
            <ImageBackground source={backgroundImage} style={{flex: 1}}>
                <TouchableOpacity onPress={handlePress}>
                    <Ionicons
                        name="ios-menu"
                        size={30}
                        color="white"
                        style={{ marginLeft: 16, marginTop: 70 }}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>

    );
}

export default CustomHeader;