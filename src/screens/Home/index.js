import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Routes';


export default function Routes() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>

    <stack.Navigator>

      <stack.Screen name = 'home' component ={Home}></stack.Screen>


    </stack.Navigator>

  </NavigationContainer>
  );
}