import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import  AppNavigator  from './src/AppNavigator';


function App() {
  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
  );
}

export default App;