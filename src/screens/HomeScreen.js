import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import { SearchBar, Card, Icon, Avatar, Button } from "@rneui/base";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export default function HomeScreen() {
    const listedItems = useSelector(state => state.items)
      
    const [value, setValue] = useState('')
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchbar}>
        <SearchBar
        platform="ios"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        lightTheme
        loadingProps={{}}
        onChangeText={newVal => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        round
        showCancel
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        onCancel={() => console.log(onCancel())}
        value={value}
        />
        </View>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        <Avatar
          size={64}
          rounded
          icon={{ name: 'tag', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#33D3AB' }}
        />
        <Avatar
          size={64}
          rounded
          icon={{ name: 'food' }}
          containerStyle={{ backgroundColor: '#33D3AB' }}
        />
        <Avatar
          size={64}
          rounded
          icon={{ name: 'bed' }}
          containerStyle={{ backgroundColor: '#33D3AB' }}
        />
         <Avatar
          size={64}
          rounded
          icon={{ name: 'kettle' }}
          containerStyle={{ backgroundColor: '#33D3AB' }}
        />
        <Avatar
          size={64}
          rounded
          icon={{ name: '' }}
          containerStyle={{ backgroundColor: '#33D3AB' }}
        />
        </View>
       

        <View style={styles.cards}>
        <FlatList
        data={listedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <Card>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, borderRadius: 4,}}
          source={item.URI}
          accessibilityLabel={item.title}
        />
        <Text style={{ 
          marginBottom: 30,
          marginTop: 20,
          }}>
            {item.description}{'\n'}Location: {item.location}
        </Text>
        <Button
          icon={
            <Icon
              name="code"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: '#FFA26B',
            borderColor: 'transparent',
            
          }}
          title="VIEW NOW"
          color='#FFA26B'
        />
      </Card>
        
      }
     />
        </View>
      </View>
      </ScrollView> 
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      justifyContent: 'space-around',
    },
    logo: {
        flex: 1,
        backgroundColor: '#FFA26B',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '10%'
      },
      searchbar: {
        flex: 3,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
      },
      cards: {
        flex: 1,
      },
      fonts: {
        marginBottom: 8,
      },
      user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
      image: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      name: {
        fontSize: 16,
        marginTop: 5,
      },
      butttonFont: {
        color: "#FFA26B"

      },
      
  });
