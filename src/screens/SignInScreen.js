import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Input, Icon, Button, Image } from '@rneui/base';
import React, { useState } from 'react';
import { togglePasswordVisibility } from '../hooks/togglePasswordVisiblity';
import { useSelector, useDispatch } from 'react-redux';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { rightIcon, passwordVisibility, changePasswordVisibility } = togglePasswordVisibility();
  
  usersList = useSelector(state => state.users)

  const dispatch = useDispatch();

  const checkUserDetails = (userDetails, userList) => {
    
    const userExists =  userList.filter(item => item.passWord === userDetails.password1 && item.userEmail === userDetails.email1);
    console.log(userExists)
    if (userExists.length > 0){
      username = userExists[0].userName
      const action = {
        type: 'LOG_IN',
        payload: username
      }
      dispatch(action)
      console.log('LogIn Successful')
    }
     else {
        alert('User not found. Please crosscheck your details or Sign up')
      }
  }

  const logIn = (email, password, userList) => {
    let userDetails = {email1: email, password1: password}
    if (email && password){
      checkUserDetails(userDetails, userList)
    }
    else{
      alert('Invalid input. All fields are required')
    }
  }
  
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
        source={ require('../../assets/logo2.png')}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.input}>
      <Input
      inputStyle={{textAlign: 'auto'}}
      placeholder="Enter email address"
      leftIcon={
        <Icon
          containerStyle={{marginRight: 15}}
          name='envelope'
          type='font-awesome'
          size={24}
          color='#FFA26B'
        />
      }
      onChangeText={value => setEmail(value)}
      value={email}
      />
       <Input
      placeholder="Enter password"
      secureTextEntry={passwordVisibility}
      leftIcon={
        <Icon
          containerStyle={{marginRight: 15}}
          name='lock'
          type='font-awesome'
          size={24}
          color='#FFA26B'
        />
      }
      rightIcon={
        <Icon
          containerStyle={{marginLeft: 15}}
          name={rightIcon}
          type='font-awesome'
          size={24}
          color='#FFA26B'
          onPress={changePasswordVisibility}
        />
      }
      onChangeText={value => setPassword(value)}
      value={password}
      />
      </View>
      <View style={styles.button}>
      <Button
              title="Sign In"
              icon={{
                name: 'login',
                type: 'material-community',
                size: 30,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700', fontSize:32 }}
              buttonStyle={{
                backgroundColor: '#10c699',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 10,
              }}
              containerStyle={{
                width: 335,
                // minHeight: 400,
                marginTop: 30,
                
              }}
              onPress={()=> logIn(email, password, usersList)}
            />
      
      <Button
              containerStyle={{
                width: 335,
                minHeight: 400,
              }}
              title={<><Text style={styles.text}>Don't have an account?</Text><Text style={styles.text2}> Sign Up</Text></>}
              type="clear"
              titleStyle={{ color: '#FFA26B', fontSize: 24 }}
              onPress={() => navigation.navigate('Sign Up') }
            />
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
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    // resizeMethod: 'resize'
  },
  logo: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: '40%'
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    margin: 10,
    marginTop: 30
  },
  button: {
    flex: 1,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  text: { color: '#FFA26B', fontSize: 24, fontStyle: 'italic', fontFamily: 'Roboto' },
  text2: { color: '#10c699', fontSize: 24, fontStyle: 'italic', fontFamily: 'Roboto' }
});
