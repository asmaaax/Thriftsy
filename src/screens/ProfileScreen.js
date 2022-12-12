import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { Input, Icon, Button, Card, Avatar, ListItem } from '@rneui/base';
import React, { useState } from 'react';

export default function ProfileScreen({ navigation }) {
  const listItems = [
    {'value': 'My Listings', 'key': 1, 'icon': 'rectangle-list'},
    {'value': 'Saved Listings', 'key': 2, 'icon': 'cart-arrow-down'},
    {'value': 'My Location', 'key': 3, 'icon': 'location-pin'},
    {'value': 'My Notifications', 'key': 4, 'icon': 'bell'},
    {'value': 'Settings', 'key': 5, 'icon': 'gear'},
    {'value': 'Delete Account', 'key': 6, 'icon': 'trash'}
  ]
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
          containerStyle={{ borderRadius: 50 }}
          size={24} />
        </Avatar>
      <View style={styles.card}>
        <Card 
        containerStyle={{ marginTop: 15, borderBottomWidth: 1, minWidth:'95%', backgroundColor: '#10c699', borderRadius: 5, borderColor: '#10c699'}}>
            <View>
          
          <Text style={styles.fonts2} h2>
            Username{'\n'}Email{'\n'}Something random{'\n'}Something random
          </Text>
          <TouchableOpacity>
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
          <ListItem.Subtitle containerStyle={{flexDirection: 'row'}}>
          <Icon
          name={item.icon}
          type='font-awesome'
          color='#FFA26B'
          size={18}
          />
            <Text style={styles.fonts}>{item.value}</Text>
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
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    includeFontPadding: true
  },
  fonts2: {
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontSize: 22,
    margin: 10,
  },
  fonts3: {
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    textDecorationLine: 'underline',
    fontSize: 22,
    margin: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  text: { color: '#FFA26B', fontSize: 24, fontStyle: 'italic' },
  text2: { color: '#10c699', fontSize: 24, fontStyle: 'italic' }
});
