import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import OtherProfile from '../screens/OtherProfile';
import UserProfile from '../screens/UserProfile';

const stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="/userProfile"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="/home" component={Home} />
        <stack.Screen name="/otherProfile" component={OtherProfile} />
        <stack.Screen name="/userProfile" component={UserProfile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
