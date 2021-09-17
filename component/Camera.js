import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { RNCamera} from 'react-native-camera';

export default function CameraScreen  ({ navigation, route }) {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },

    camera: {
        padding: 50,
        flex: 2,
        justifyContent: 'center',
      },
  })