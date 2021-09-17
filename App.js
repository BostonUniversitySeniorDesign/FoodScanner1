import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeScreen from './component/firestore.js';
import PRecipe from './component/pRecipe.js';
import HomeScreen from './component/HomeScreen.js';
import CameraScreen from './component/Camera.js';
import ServingScreen from './component/Serving.js';
import LoginScreen from './component/Login.js';
import { renderNode } from 'react-native-elements/dist/helpers';

const Stack = createNativeStackNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login"
            component = {LoginScreen}
            options={{title: 'Welcome'}, {headerTitleAlign: 'center'}}
          /> 

          <Stack.Screen 
            name="Home"
            component = {HomeScreen}
            options={{title: 'Home'}, {headerTitleAlign: 'center'}}
          />  
            
          <Stack.Screen
            name="Camera"
            component={CameraScreen}
            options={{title: 'QRcode Scan'}, {headerTitleAlign: 'center'}}
          />

          <Stack.Screen
            name="Servings"
            component={ServingScreen}
            options={ {title: 'Servings'}, {headerTitleAlign: 'center'}}
          />

          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={ {title: 'Recipe'}, {headerTitleAlign: 'center'}}
          />

          <Stack.Screen
            name="Past Recipes"
            component={PRecipe}
            options={ {title: 'Past Recipes'}, {headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },

  image: {
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    //resizeMode: 'stretch',
  },

  button: {
    paddingLeft: 20,
    paddingRight: 20,

  },

  text: {
    //flex: 1,
    //padding: 30,
    fontSize: 30,
    fontWeight: 'bold',
    //flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },

  camera: {
    padding: 50,
    flex: 2,
    justifyContent: 'center',
  },
})