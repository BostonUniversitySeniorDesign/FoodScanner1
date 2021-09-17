import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '56003830875-3pl0qmrunoekikvtgpoaif4hi7edples.apps.googleusercontent.com',
  });
const image = { uri: "https://www.diabetes.org/sites/default/files/2019-08/Diabetes-Superfoods-min.jpg"};

export default function LoginScreen ({ navigation }) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    function GoogleSignIn() {
      return (
        <Button
          style = {styles.button}
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

      //global.uid = googleCredential;

      const user = {
        Recipe: "",

      }

      //await firestore().collection("Users").doc(global.uid).set(user);
    
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
  
    async function signOutUser () {
      try {
          GoogleSignin.revokeAccess();
          await auth().signOut();
          setUser({user: null});
      } catch (e) {
          console.log(e);
      }
  }
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <View style = {styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
                  <Text style = {styles.text}> Food Scanner </Text>
                  
                  <Button
                    title="Google Sign-In"
                    onPress={() => onGoogleButtonPress().then(() => navigation.navigate('Home'))}
                  />  
                </ImageBackground>
        </View>
  
      );
    }
    return (
      <View style = {styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
                  <Text style = {styles.text}> Food Scanner </Text>
                  
                  <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                  />  
  
                  <Button
                    title="Log out"
                    onPress={() => signOutUser().then(() => navigation.navigate('Login'))}
                  />
                </ImageBackground>
      </View>
    )
    
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