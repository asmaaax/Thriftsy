import React, { useState } from 'react';
import Dialog from "react-native-dialog";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';


export default function MyAvatar (props) {
    
    const [selected, setSelected] = useState(null)
  

    const avatarIcons =[
        {key: '1', value:'account'},
        {key: '2', value:'bitcoin'},
        {key: '3', value:'face-man-shimmer-outline'},
        {key: '4', value:'pokeball'},
        {key: '5', value:'dog'}, 
        {key: '6', value:'bird'},
        {key: '7', value:'face-woman-shimmer-outline'}, 
        {key: '8', value:'snowman'},
        {key: '9', value:'alien'},
        {key: '10', value:'paw'}, 
        {key: '11', value:'sprout'},
        {key: '12', value:'flower-tulip'},
        {key: '13', value:'pine-tree'}
       ]
  
  
  
      return(
        <View style={styles.container}>
      <Dialog.Container visible={props.visibility}>
      <Dialog.Title style={{textAlign: 'center'}}>{props.title}</Dialog.Title>
      <Dialog.Description style={{textAlign: 'center'}}>
      {props.description}      
      </Dialog.Description>
      <SelectList
        style={styles.dropdown}
        setSelected={(val) => setSelected(val)} 
        data={avatarIcons} 
        save="value"
        boxStyles={{margin:12, borderRadius:4}}
        placeholder="Choose an Avatar"
        value={selected}
        />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.button}>
      <Dialog.Button label="Cancel"
      color='#FFF'
      onPress={() =>
        props.cancelFunc()} /></TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
      <Dialog.Button label="Submit"
      color='#FFF'
      onPress={() => props.submitFunc(selected)} />
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