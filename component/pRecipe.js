import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import {Lid} from './Login';
import { ListItem } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore';

export default class PRecipe extends React.Component {
    
    state = {
        Recipe: '',
    };
    
    constructor(props) {
        super(props);
        this.subscriber = firestore().collection('Users');
        this.getCollection();

    }


    getCollection = async () => {
        //const userArr = [];
        //querySnapshot.forEach((res) => {
          //const { Recipe } = res.data();
          /*userArr.push({
            key: res.id,
            res,
            Recipe,
          });
        });*/
        //this.setState({
          //Recipe,
       //});
        //})
        let PR = '';
        await this.subscriber
        .where('id', '==', Lid)
        .get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
            
                PR = documentSnapshot.data().Recipe
                this.setState({
                    Recipe: this.state.Recipe + ' / ' + PR
                })
                //console.log(documentSnapshot.data().Recipe)
            })

        });

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