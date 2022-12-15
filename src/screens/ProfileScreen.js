import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Card, Avatar, ListItem } from '@rneui/base';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import DialogPrompt from '../components/DialogPrompt';
import MyAvatar from '../components/MyAvatar';


export default function ProfileScreen({ navigation }) {

  const validatePostcodeURL = 'https://api.postcodes.io/postcodes/'

  const listItems = [
    {'value': 'My Listings', 'key': 1, 'icon': 'list', func : function () {
      alert('This functionality is still in the works')
    }},
    {'value': 'Saved Listings', 'key': 2, 'icon': 'cart-arrow-down', func : function () {
      alert('This functionality is still in the works')
    }},
    {'value': 'My Location', 'key': 3, 'icon': 'map-marker', func : function () {
      getLocation()
    }},
    {'value': 'My Notifications', 'key': 4, 'icon': 'bell', func : function () {
      alert('This functionality is still in the works')
    }},
    {'value': 'Settings', 'key': 5, 'icon': 'gear', func : function () {
      alert('This functionality is still in the works')
    }},
    {'value': 'Delete Account', 'key': 6, 'icon': 'trash', func : function () {
      confirmDelete()
    }}
  ]


  const [userLocation, setUserLocation] = useState('Update your location')
  
  const [showAlert, setShowAlert] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  currentUser = useSelector(state => state.logged_in_user)

  const dispatch = useDispatch();

  const logOut = () =>{
    const action = {
      type: 'LOG_OUT',
      payload: ''
    }
    dispatch(action)
  }

  const deleteAccount = () => {
    const action = {
      type: 'DEL_USER',
      payload: currentUser
    }
    dispatch(action)
    navigation.navigate('Sign Up')
  }

  const confirmDelete = () => setShowAlert(true);

  const cancelFunction = () => {
    setShowPrompt(false);
    console.log('Cancelled')
  }

  

  const validPostcode = async (postcode) => {
    fetch(`${validatePostcodeURL}${postcode}/validate`, {
      method: 'GET',
    })
    .then(response =>  response.json() )
    .then( d =>  {
      setShowPrompt(false)
      if (d.result){
        getTown(postcode)
      }
      else {
        alert('You entered an invalid postcode')
      }})
    .catch(err => {console.log(`ERROR: ${err}`)})
  }

  const getLocation = () => setShowPrompt(true);

  const getTown = async (postcode) => {
    fetch(`${validatePostcodeURL}${postcode}`, {
      method: 'GET',
    })
    .then(response =>  response.json() )
    .then( d =>  {
        setUserLocation(d.result.parish);
        alert('Your location has been updated');
      })  
    .catch(err => {console.log(`ERROR: ${err}`)})
  }
  
  
  const avatar = useSelector(state => state.avatar)
  const [showAvatarPrompt, setShowAvatarPrompt] = useState(false)
  const pickAvatar = (selected) => {
    const action = {
      type: 'CHANGE_AVATAR',
      payload: selected
    }
    dispatch(action)
    setShowAvatarPrompt(false)
  }

  const cancelAvatarPrompt = () => setShowAvatarPrompt(false)

  return (
<ScrollView>    
    <View style={styles.container}>
    <Avatar
          size={120}
          rounded
          icon={{ name: avatar, type: 'material-community'}}
          containerStyle={{ backgroundColor: '#FFA26B', marginTop: 30, marginRight: 10, alignSelf: 'center' }}
        >
          <Avatar.Accessory 
          color='#FFA26B'
          backgroundColor='#10c699'
          containerStyle={{ borderRadius: 100, borderWidth: 0 }}
          size={42}
          onPress={()=> setShowAvatarPrompt(true)} />
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
            getLocation();;
          }}>
          <Text style={styles.fonts2}>{userLocation}</Text></TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            logOut();
            navigation.navigate('Sign In');
          }}
          style={{backgroundColor: '#FFA26B', width: 90, marginLeft: 200, borderRadius: 10}}>
          <Text style={styles.fonts3}>Sign Out</Text></TouchableOpacity>
          </View>
        </Card>
        </View>
        <View style={styles.container}>
          {profileList = listItems.map((item) =><TouchableOpacity
          key={item.key}
          onPress={() => item.func()}>
          <ListItem 
          
          bottomDivider 
          containerStyle={{  backgroundColor: '#FFF', padding: 24, margin: 10, borderRadius: 5, borderBottomWidth: 1, borderColor: '#10c699'}}>
          <ListItem.Content>
          <ListItem.Subtitle>
          <View style={{flexDirection: 'row'}}>
          <Icon
          name={item.icon}
          type='font-awesome'
          color='#FFA26B'
          size={20}
          />
            <Text style={styles.fonts}>{"  "}{item.value}</Text>
            </View>
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron iconStyle={{color:'#FFA26B' }}/>
        </ListItem>
        </TouchableOpacity>
          )}   
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Delete Account?"
          message="Are you sure you want to delete your account?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor='#FFA26B'
          cancelButtonColor='#10c699'
          onCancelPressed={() => {
            setShowAlert(false)
          }}
          onConfirmPressed={() => {
           deleteAccount()
          }}
        />
        <DialogPrompt
        title={'Enter your location'}
        description={'Enter a valid UK postcode '}
        placeholder={'Enter postcode'}
        visibility={showPrompt}
        cancelFunc={cancelFunction}
        submitFunc={validPostcode}/>
      <MyAvatar
      title={'Choose an Avatar'}
      visibility={showAvatarPrompt}
      cancelFunc={cancelAvatarPrompt}
      submitFunc={pickAvatar}/>
    
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
    fontFamily: 'Roboto',
    fontSize: 22,
    includeFontPadding: true,
    textAlign: 'center',

  },
  fonts2: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 24,
    margin: 10,
  },
  fonts3: {
    color: '#FFF',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontStyle: 'bold',
    fontSize: 21,
    margin: 10,
  }
});
