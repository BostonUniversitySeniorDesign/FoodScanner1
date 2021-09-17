import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { RNCamera} from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';

GoogleSignin.configure({
  webClientId: '56003830875-3pl0qmrunoekikvtgpoaif4hi7edples.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();
const image = { uri: "https://www.diabetes.org/sites/default/files/2019-08/Diabetes-Superfoods-min.jpg"};

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
    return (
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
    );
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

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