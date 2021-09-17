import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { ListItem } from 'react-native-elements'

export default class RecipeScreen extends React.Component {
    state = {
        Recipe: "",
        uid:"",
        Old:" ",
      }
    
      constructor(props) {
        super(props);
        this.getUser();
        this.setState
        this.dbRef = firestore().collection('Users').doc(this.state.uid);
        this.state = {
            Recipe: '',
        }; 
      }

      getUser = async () => {
        const id = await GoogleSignin.getCurrentUser();
        this.setState({
          Recipe: "",
          uid: id,
          Old:" ",
        });

      }
    
      inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

      storeUser() {
        /*this.dbRef.onSnapshot(doc => {this.setState({
          Old: doc.Recipe,
        })});*/
        //const old = this.state.Recipe;

        if(this.state.Old === " ") {
          this.dbRef.set({
            Recipe: this.state.Recipe
        }).then((res) => {
            this.setState({
                Old: this.state.Recipe,
            });

        })

        }

        else {

        this.dbRef.set({
            Recipe: this.state.Old + ' / ' + this.state.Recipe
        }).then((res) => {
            this.setState({
                Old: this.state.Old + ' / ' + this.state.Recipe,
            });

        })
        }
      }

    render() {
        return (
    <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Recipe'}
              value={this.state.Recipe}
              onChangeText={(val) => this.inputValueUpdate(val, 'Recipe')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Recipe'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>

        <Button 
            title="Go to Past Recipes"
            onPress={() => this.props.navigation.navigate('Past Recipes')}
        />
    </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },

})