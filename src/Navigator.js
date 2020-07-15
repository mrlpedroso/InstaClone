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
import Splash from './screens/Splash'

//enableScreens();
const Tab = createBottomTabNavigator()
const LoginStack = createStackNavigator();
const SplashStack = createStackNavigator();

function SplashRouter() {
  return (
    <NavigationContainer>
      <SplashStack.Navigator screenOptions={{headerShown: false}}>
        <SplashStack.Screen name="Splash" component={Splash} />
        <SplashStack.Screen name="App" component={MenuNavigator} />      
      </SplashStack.Navigator>
    </NavigationContainer>

  )
}

function LoginOrProfile() {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Profile" component={Profile} />      
      <LoginStack.Screen name="Register" component={Register} />
    </LoginStack.Navigator>
  );
}

function MenuNavigator() {
  return (
    
      <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ showLabel: false }} >
        <Tab.Screen name="Feed" component={Feed}
          options={{ title: 'Feed', tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} /> }} />
        <Tab.Screen name="AddPhoto" component={AddPhoto}
          options={{ title: 'AddPhoto', tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} /> }} />
        <Tab.Screen name="Profile" component={LoginOrProfile}
          options={{ title: 'Profile', tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} /> }} />          
      </Tab.Navigator>
    
  )
}

export default SplashRouter