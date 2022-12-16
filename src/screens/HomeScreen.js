import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar, Card, Icon, Avatar, Button } from "@rneui/base";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';




export default function HomeScreen() {
    const listedItems = useSelector(state => state.items)
    const avatarIcons = [
      {iconName: 'tag', iconType: 'font-awesome' },
      {iconName: 'food', iconType: null },
      {iconName: 'bed', iconType: null },
      {iconName: 'kettle', iconType: null },
      {iconName: '', iconType: null },
    ]

    const [search, setSearch] = useState('')
    currentUser = useSelector(state => state.logged_in_user);
    
    return (
      <ScrollView>
      <View style={styles.container}>
      <View>
            <Text style={styles.fonts2}>Hello {currentUser.userName},{'\n'}{'\n'}What would you like to search for?</Text>
          </View>
        <View style={styles.searchbar}>
          <View style={{flex:4}}>
        <SearchBar
        platform='ios'
        containerStyle={{marginRight: 0}}
        inputContainerStyle={{marginRight: 3}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        lightTheme
        loadingProps={{}}
        onChangeText={val => setSearch(val)}
        onClearText={() => console.log(onClearText())}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        round
        showCancel
        cancelButtonTitle=""
        cancelButtonProps={{}}
        onCancel={() => console.log(onCancel())}
        value={search}
        />
        </View>
        <View style={{flex: 0.7, marginTop: 10}}>
         <TouchableOpacity style={{backgroundColor: '#33D3AB', height: 48, marginBottom: 10,marginTop:3, borderRadius: 5, marginRight: 10, paddingLeft: 0, justifyContent: 'center'}}><Icon
            name='search'
            size={30}
            color='#FFF'
            type='evilicon'
          /></TouchableOpacity>
          </View>
        </View>
        <View>
        <FlatList
        contentContainerStyle={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginBottom: 10,
          marginTop: 10,
        }}
        data={avatarIcons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <Avatar
          size={64}
          rounded
          icon={{ name: item.iconName, type: item.iconType }}
          containerStyle={{ backgroundColor: '#33D3AB' }}
        /> }/>
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
            {item.description}{'\n'}{'\n'}Location: {item.location}
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
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
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
      fonts2: {
        color: '#33D3AB',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 22,
        fontStyle: 'bold',
        margin: 10,
        marginTop: 20,
        marginBottom: 0
      },
      
  });
