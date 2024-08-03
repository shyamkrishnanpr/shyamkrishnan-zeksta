import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import OtherProfile from '../screens/OtherProfile';
import UserProfile from '../screens/UserProfile';
import FilterScreen from '../screens/FilterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white',
       
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      tabBarActiveTintColor: '#CE1694',
      tabBarInactiveTintColor: '#888',
      headerShown: false,
    }}>
    <Tab.Screen name="Activity" component={Home} />
    <Tab.Screen name="Profile" component={UserProfile} />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="OtherProfile" component={OtherProfile} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
