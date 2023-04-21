import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSideBar from './components/CustomSideBar';
import HomeScreen from './screens/HomeScreen';
import FarmScreen from './screens/FarmScreen';

const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
        <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={props => <CustomSideBar {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                overlayColor: '#00000000',
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Farm" component={FarmScreen} />
        </Drawer.Navigator>
    );
}

export default AppNavigator;