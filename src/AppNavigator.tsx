import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSideBar from './components/CustomSideBar';
import HomeScreen from './screens/HomeScreen';
import FarmScreen from './screens/FarmScreen';
import SearchScreen from './screens/SearchScreen';
import TaskDetail from './screens/TaskDetail';

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
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="Task" component={TaskDetail} />
        </Drawer.Navigator>
    );
}

export default AppNavigator;



