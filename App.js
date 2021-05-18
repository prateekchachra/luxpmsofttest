/**
 * LuxpmSoft test 
 * https://github.com/prateekchachra/luxpmsofttest
 *
 * 
 * Candidate name: Prateek Chachra
 * @format
 * @flow strict-local
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/modules/authentication/Home'
import Login from './src/modules/authentication/Login'
import Register from './src/modules/authentication/Register'
import Landing from './src/modules/main/Landing'


const Stack  = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
     
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home"  initialRouteName="Home" component={Home}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Landing" component={Landing}/>
    </Stack.Navigator>
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};



export default App;
