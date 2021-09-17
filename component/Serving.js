import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

export default function ServingScreen ({ navigation }) {
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
  })