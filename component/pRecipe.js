import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore';

export default class PRecipe extends React.Component {
    constructor() {
        super();
        this.firestoreRef = firestore().collection('Users');
        this.state = {
          Recipe: ""
        };
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }
    
    componentWillUnmount(){
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
        //const userArr = [];
        querySnapshot.forEach((res) => {
          const { Recipe } = res.data();
          /*userArr.push({
            key: res.id,
            res,
            Recipe,
          });
        });*/
        this.setState({
          Recipe,
       });
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Recipe: {this.state.Recipe} </Text>
                
            </ScrollView>
          );
    }

}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingBottom: 22
    },

    text: {
        padding: 30,
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },
});