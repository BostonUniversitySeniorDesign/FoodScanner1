import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

class HomeScreen extends React.Component {
  render() {

  return(
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Scan Food Item/Take Picture"
        onPress={() => this.props.navigation.navigate('Camera')}
      />
    </View>
    <Separator />
    <View>
     
      <Button
        title="View/Write A Recipe"
        color="#f194ff"
        onPress={() => this.props.navigation.navigate('Recipe')}
      />
   
    </View>
  </SafeAreaView>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffacd',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    marginHorizontal: 16,
    
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#fffacd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;