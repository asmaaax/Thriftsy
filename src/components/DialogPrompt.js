import React, { useState } from 'react';
import Dialog from "react-native-dialog";
import { StyleSheet, View, TouchableOpacity } from 'react-native';


export default function DialogPrompt (props) {
  const [postcode, setPostcode] = useState('')


    return(
      <View style={styles.container}>
    <Dialog.Container visible={props.visibility}>
    <Dialog.Title style={{textAlign: 'center'}}>Enter your location</Dialog.Title>
    <Dialog.Description style={{textAlign: 'center'}}>
    Enter a valid UK postcode      
    </Dialog.Description>
    <Dialog.Input
    placeholder='Enter postcode'
    onChangeText={value => setPostcode(value.trim())}/>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity style={styles.button}>
    <Dialog.Button label="Cancel"
    color='#FFF'
    onPress={() =>
      props.cancelFunc()} /></TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
    <Dialog.Button label="Submit"
    color='#FFF'
    onPress={() => props.submitFunc(postcode)} />
    </TouchableOpacity>
    </View>
  </Dialog.Container>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    height: 40,
    width: 80, 
    backgroundColor:'#FFA26B'
  },
  button2: {
    alignItems: "center",
    backgroundColor: '#10c699',
    padding: 5,
    borderRadius: 10,
    height: 40,
    width: 80, 
  },
});