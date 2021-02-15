import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import DashboardScreen from "./screens/Dashboard/Dashboard";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="Loading" component={LoadingScreen}/>
    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    <Stack.Screen name="DashboardScreen" component={DashboardScreen}/>
  </Stack.Navigator>
}
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={LoadingScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});