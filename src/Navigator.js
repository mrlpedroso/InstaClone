import React from 'react'
//import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

//enableScreens();
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

function LoginOrProfile() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />      
      <Stack.Screen name="Register" component={Register} />
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