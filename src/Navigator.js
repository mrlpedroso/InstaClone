import React from 'react'
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'

enableScreens();
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function LoginOrProfile() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function MenuNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ showLabel: false }} >
        <Tab.Screen name="Feed" component={Feed}
          options={{ title: 'Feed', tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} /> }} />
        <Tab.Screen name="AddPhoto" component={AddPhoto}
          options={{ title: 'AddPhoto', tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} /> }} />
        <Tab.Screen name="Profile" component={LoginOrProfile}
          options={{ title: 'Profile', tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} /> }} />          
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MenuNavigator