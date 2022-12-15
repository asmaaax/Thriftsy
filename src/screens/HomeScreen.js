import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { SearchBar, Card, Icon, Avatar, Button } from "@rneui/base";
import React, { useState } from 'react';


export default function HomeScreen({ navigation }) {
  
      
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
        <ScrollView>
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
        </ScrollView>
        <View style={styles.cards}>
        <Card>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, borderRadius: 4,}}
            source={require('/Users/asmaakhalif/Documents/GitHub/Thriftsy/assets/card1.jpeg')}
          />
          <Text style={{ 
            marginBottom: 30,
            marginTop: 20,
            }}>
            Food parcel for family, available for collection from nearby community centre or delivery to home address.
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
        </View>
        <View style={styles.cards}>
        <Card>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require('/Users/asmaakhalif/Documents/GitHub/Thriftsy/assets/card2.jpeg')}
          />
          <Text style={{ 
            marginBottom: 30,
            marginTop: 20,
            }}>
            Emergency affordable double bedroom to rent in the Hackney area. Click view now to enquire about accomodation.
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
            }}
            title="VIEW NOW"
            color='#FFA26B'
          />
        </Card>
        </View>
        <View style={styles.cards}>
        <Card>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require('/Users/asmaakhalif/Documents/GitHub/Thriftsy/assets/card3.jpeg')}
          />
          <Text style={{ 
            marginBottom: 30,
            marginTop: 20,
            }}>
            Size 6 junior boys black trainers. Like new condition, available for collection or delivery.
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
            }}
            title="VIEW NOW"
            color='#FFA26B'
          />
        </Card>
        </View>
        <View style={styles.cards}>
        <Card>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require('/Users/asmaakhalif/Documents/GitHub/Thriftsy/assets/card4.jpeg')}
          />
          <Text 
          style={{ 
            marginBottom: 30,
            marginTop: 20,
            }}>
            Sanitary parcel for one person ready for collection or delivery.
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
            }}
            title="VIEW NOW"
            color='#FFA26B'
          />
        </Card>
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
