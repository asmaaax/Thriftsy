import { ListItem, Avatar, Text, Button} from "@rneui/base";
import { TouchableHighlight, StyleSheet, View, SafeAreaView, TextInput, Image, Platform } from "react-native";
import React from "react"
import { SelectList } from 'react-native-dropdown-select-list'



export default function AddItemScreen({ navigation }) {
    
        const [text, onChangeText] = React.useState({ title: '', description: '' });
        
        const [number, onChangeNumber] = React.useState(null);
        const handleChange = (name, value) => {
            setValues({
              ...values,
              [name]: value,
            });
          };
        

        const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Food'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Accomodation'},
      {key:'4', value:'Clothing'},
      
  ]

    return (
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
            onChangeText={value => handleChange('title', value)}
            placeholder="Add Title"
            value={text}
            
        />
        <TextInput
            style={styles.inputTwo}
            onChangeText={value => onChangeText(value)}
            placeholder="Add Description"
            multiline={true}
            value={text}
            
        />
        </SafeAreaView>
        <SelectList
        style={styles.dropdown}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{margin:12, borderRadius:4}}
        placeholder="Select Category"
        />
        <SafeAreaView>
        <TextInput
        style={styles.inputThree}
        onChangeText={onChangeNumber}
        value={number}
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
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        </View>
        </View>
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