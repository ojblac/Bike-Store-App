import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import login from './screen/login';
import home from './screen/home';
import cart from './screen/cart';



export default function App() {
    const mainNavigator = createStackNavigator();
 
  return (
    <View style ={{flex: 1}}> 
        <NavigationContainer>
          <mainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="login">
              <mainNavigator.Screen name="login" component ={login} />
              <mainNavigator.Screen name="home" component ={home} />
              <mainNavigator.Screen name="cart" component ={cart} />

          </mainNavigator.Navigator>
        </NavigationContainer>
    </View>
  );
}

