import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { RNCamera} from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

GoogleSignin.configure({
  webClientId: '56003830875-3pl0qmrunoekikvtgpoaif4hi7edples.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [barcode, setBarcode] = useState(null);

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login">  
            <View style = {styles.container}>
              <Text style = {styles.text}> Food Scanner </Text>
              
              <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
              />
            </View>
          </Stack.Screen>
          <Stack.Screen>
            <View style = {styles.container}>
              {barcode ? (
                  <View style={[styles.rnCamera, styles.rmCameraResult]}>
                    <Text style={styles.rmCameraResultText}>{barcode.data}</Text>
                    <Text style={styles.rmCameraResultText}>{barcode.type}</Text>
                  </View>
                  ) : (
                  <RNCamera
                    onBarCodeRead={setBarcode}
                    style = {styles.camera}
                  >
                  </RNCamera>)
              }
            </View>
          </Stack.Screen>
            
        </Stack.Navigator>
      </NavigationContainer>
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
    padding: 100,
    justifyContent: 'center',
  },

  text: {
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  camera: {
    padding: 50,
    flex: 2,
    justifyContent: 'center',
  },
})