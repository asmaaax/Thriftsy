import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { Input, Icon, Button, Card, Avatar, ListItem } from '@rneui/base';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileScreen({ navigation }) {
  const listItems = [
    {'value': 'My Listings', 'key': 1, 'icon': 'list'},
    {'value': 'Saved Listings', 'key': 2, 'icon': 'cart-arrow-down'},
    {'value': 'My Location', 'key': 3, 'icon': 'map-marker'},
    {'value': 'My Notifications', 'key': 4, 'icon': 'bell'},
    {'value': 'Settings', 'key': 5, 'icon': 'gear'},
    {'value': 'Delete Account', 'key': 6, 'icon': 'trash'}
  ]

  currentUser = useSelector(state => state.logged_in_user)

  const dispatch = useDispatch();

  const logOut = () =>{
    const action = {
      type: 'LOG_OUT',
      payload: ''
    }
    dispatch(action)
  }

  return (
<ScrollView>    
    <View style={styles.container}>
    <Avatar
          size={120}
          rounded
          icon={{ name: 'user', type: 'font-awesome'}}
          containerStyle={{ backgroundColor: '#FFA26B', marginTop: 30, marginRight: 10, alignSelf: 'center' }}
        >
          <Avatar.Accessory 
          color='#FFA26B'
          backgroundColor='#10c699'
          containerStyle={{ borderRadius: 100, borderWidth: 0 }}
          size={42} />
        </Avatar>
      <View style={styles.card}>
        <Card 
        containerStyle={{ marginTop: 15, borderBottomWidth: 1, minWidth:'95%', backgroundColor: '#10c699', borderRadius: 5, borderColor: '#10c699'}}>
            <View>
          
          <Text style={styles.fonts2} h2>
            {currentUser.userName}{'\n'}{'\n'}{currentUser.userEmail}
          </Text>
          <TouchableOpacity
          onPress={() => {
            logOut();
            navigation.navigate('Sign In');
          }}>
          <Text style={styles.fonts3}>Sign Out</Text></TouchableOpacity>
          </View>
        </Card>
        </View>
        <View style={styles.container}>
          {profileList = listItems.map((item) =>
          <ListItem 
          key={item.key}
          bottomDivider 
          containerStyle={{  backgroundColor: '#FFF', padding: 24, margin: 10, borderRadius: 5, borderBottomWidth: 1, borderColor: '#10c699'}}>
          <ListItem.Content>
          <ListItem.Subtitle>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Icon
          name={item.icon}
          type='font-awesome'
          color='#FFA26B'
          size={20}
          // iconContainerStyle={{padding: 30}}
          />
            <Text style={styles.fonts}>{item.value}</Text>
            </View>
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron iconStyle={{color:'#FFA26B' }}/>
        </ListItem>
          )}   
        </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    padding: 0,
  },
  fonts: {
    color: '#FFA26B',
    // textAlign: 'center',
    fontFamily: 'Roboto',
    // fontWeight: 'bold',
    fontSize: 22,
    includeFontPadding: true,
    // margin: 10
  },
  fonts2: {
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 24,
    margin: 10,
  },
  fonts3: {
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 20,
    margin: 10,
  }
});
