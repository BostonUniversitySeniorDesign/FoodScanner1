<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { RNCamera} from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
>>>>>>> 863fb1079048c7e6234ac029d2e9a310ade7cdb4

const Stack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();
const image = { uri: "https://www.diabetes.org/sites/default/files/2019-08/Diabetes-Superfoods-min.jpg"};

export default function App() {
  // Set an initializing state whilst Firebase connects
<<<<<<< HEAD
=======
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login"
            component = {LoginScreen}
            options={{title: 'Welcome'}, {headerTitleAlign: 'center'}}
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
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const CameraScreen = ({ navigation, route }) => {
  const [barcode, setBarcode] = useState(null);
  return (
    <View style = {styles.container}>
              {barcode ? (
                  <View style={[styles.rnCamera, styles.rmCameraResult]}>
                    <Text style={styles.rmCameraResultText}>{barcode.data}</Text>
                    <Text style={styles.rmCameraResultText}>{barcode.type}</Text>
                    <Button 
                      title="Go to Servings"
                      onPress={() => navigation.navigate('Servings')}
                    />
                  </View>

                  
                  ) : (
                  <RNCamera
                    onBarCodeRead={setBarcode}
                    style = {styles.camera}
                  >
                  </RNCamera>)
              }
    </View>
  );
};

const ServingScreen = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState("0");

  return(
    <View style = {styles.container}>
      <Text>How many servings do you want?(in grams)</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        //placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>

  );

};

const RecipeScreen = ({ navigation }) => {
  const usersCollection = firestore().collection('Users');

};

const LoginScreen = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function GoogleSignIn() {
>>>>>>> 863fb1079048c7e6234ac029d2e9a310ade7cdb4
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

<<<<<<< HEAD
          <Stack.Screen
            name="Past Recipes"
            component={PRecipe}
            options={ {title: 'Past Recipes'}, {headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


=======
  if (!user) {
    return (
      <View style = {styles.container}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
                <Text style = {styles.text}> Food Scanner </Text>
                
                <Button
                  title="Google Sign-In"
                  onPress={() => onGoogleButtonPress().then(() => navigation.navigate('Camera'))}
                />

                
              </ImageBackground>
      </View>

    );
  }
  return (
    <View style = {styles.container}>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}
>>>>>>> 863fb1079048c7e6234ac029d2e9a310ade7cdb4
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

<<<<<<< HEAD
  button: {
    paddingLeft: 20,
    paddingRight: 20,

  },

=======
>>>>>>> 863fb1079048c7e6234ac029d2e9a310ade7cdb4
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