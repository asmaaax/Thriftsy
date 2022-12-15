import { ListItem, Avatar, Text, Button} from "@rneui/base";
import { TouchableHighlight, StyleSheet, View, SafeAreaView, TextInput, Image, Platform, ScrollView } from "react-native";
import React from "react"
import { SelectList } from 'react-native-dropdown-select-list'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';




export default function AddItemScreen() {

    
        
        const validatePostcodeURL = 'https://api.postcodes.io/postcodes/';

        const dispatch = useDispatch();


        const [title, setTitle] = React.useState('')
        const [description, setDescription] = React.useState('')
        const [postcode, setPostcode] = React.useState('');
        const [selected, setSelected] = React.useState(null);

        currentUser = useSelector(state => state.logged_in_user);



          const submitFunction = async (item_title, item_description, item_postcode, item_selected, user) => {
            
            fetch(`${validatePostcodeURL}${item_postcode}/validate`, {
              method: 'GET',
            })
            .then(response =>  response.json() )
            .then( d =>  {
              if (d.result){
                addItem(item_title, item_description, item_postcode, item_selected, user);
                setTitle('');
                setDescription('');
                setPostcode('');
                setSelected(null);
              }
              else {
                alert('You entered an invalid postcode')
              }})
            .catch(err => {console.log(`ERROR: ${err}`)})
          }
         
        

  const addItem = (item_title, item_description, item_postcode, item_selected, user) => {
    if (item_title && item_description && item_postcode && item_selected){
    const action = {
      type: 'ADD_ITEM',
      payload: {
        'userName': user, 
        'title': item_title, 
        'description': item_description, 
        'location': item_postcode, 
        'category': item_selected}
    }
    dispatch(action)
    alert('Your item has been successfully added.')
  }
  else {
      alert('There are some missing fields. All fields are required.')
  }}
       
  
  const data = [
      {key:'1', value:'Food'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Accomodation'},
      {key:'4', value:'Clothing'},
      {key:'5', value:'Sanitary'},
      {key:'6', value:'Other'},
      
  ]

    return (

      <ScrollView>

        <View style={styles.container} >
        <View style={styles.imageContainer}>
        <Image
            style={styles.stretch}
            source={require('/Users/asmaakhalif/Documents/GitHub/Thriftsy/assets/additem.peg.png')}
        />
        </View>
            
        <SafeAreaView>
        <TextInput
            style={styles.inputOne}
            onChangeText={value => setTitle(value)}
            placeholder="Add Title"
            value={title}
            
        />
        <TextInput
            style={styles.inputTwo}
            onChangeText={value => setDescription(value)}
            placeholder="Add Description"
            multiline={true}
            value={description}
            
        />
        </SafeAreaView>
        <SelectList
        style={styles.dropdown}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{margin:12, borderRadius:4}}
        placeholder="Select Category"
        value={selected}
        />
        <SafeAreaView>
        <TextInput
        style={styles.inputThree}
        onChangeText={value => setPostcode(value)}
        value={postcode}
        placeholder="Pick Up Location (Post Code)"
    
      />
        </SafeAreaView>
        <View>
        <Button
        title="Post Item"
        color="#f194ff"
        buttonStyle={{
            backgroundColor: '#33D3AB',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius:4,
            margin: 12,
          }}
        onPress={() => submitFunction(title, description, postcode, selected, currentUser)}
      />
        </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',

    },
    imageContainer: {
        justifyContent: "center"
      },
      stretch: {
        margin: 12,
        height: 200,
        width: 400,
        resizeMode: 'stretch',
        
      },
    inputOne: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:4
      },
    inputTwo: {
      height: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:4
    },
    inputThree: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:4
      },
      
  });