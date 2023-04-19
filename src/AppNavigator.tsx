import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from './components/CustomHeader';
import HomeScreen from './screens/HomeScreen';
import FarmScreen from './screens/FarmScreen';

const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                header: () => <CustomHeader />,
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="My Farm" component={FarmScreen} />
        </Drawer.Navigator>
    );
}

export default AppNavigator;
