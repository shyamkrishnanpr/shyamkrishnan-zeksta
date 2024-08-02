import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';

const stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <stack.Navigator initialRouteName="/home" screenOptions={{headerShown: false}}>
        <stack.Screen name="/home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
