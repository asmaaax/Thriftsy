import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Input, Icon, Button, Image } from '@rneui/base';
import { togglePasswordVisibility } from '../hooks/togglePasswordVisiblity';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('')
  const { rightIcon, passwordVisibility, changePasswordVisibility } = togglePasswordVisibility();

  usersList = useSelector(state => state.users)

  const dispatch = useDispatch();

 
  const validateEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
}


const userExists = (userDetails, userList) => {
  return (
    userList.filter(item => item.userName === userDetails.username1 || item.userEmail === userDetails.email1).length > 0)
  
}


const validData = (email, username, password, password2) => {
  if (email && username && password && password2){
    return true
  } else {
    return false
  }
}

const checkPassword = (password, password2) => {
    if (password === password2){
      return true
    }
    else {
      return false
    }
}

const handleSignUp = (email, username, password, password2, userList) => 
{
    const dataValid = validData(email, username, password, password2)
    let userExist;
    let validPassword;
    let emailValid;
    if (dataValid){
        emailValid = validateEmail(email);
        if (emailValid) {
          // console.log(userList)
          details = {email1: email, username1: username}
          userExist  = userExists(details, userList)
          if (userExist){
            alert('Username and/or email already taken')
            return false
          }
          else{
            validPassword = checkPassword(password, password2)
            if (validPassword){
              return true
            }
            else{
              alert('Password details do not match')
              return false
            }
          }
        } else {
            alert("Invalid email format.Please check your input and try again.");
            return false
        }

    }
    else {
      alert('Invalid entry, you have some empty input')
      return false
    }
  }


  function signUpUser(email, username, password, password2, userList){
    const signUp = handleSignUp(email, username, password, password2, userList)
    let userInfo;
    let action;
    if (signUp){
      userInfo = {userName: username, passWord: password, userEmail: email}
      action = {
        type: 'ADD_USER',
        payload: userInfo
      }
      dispatch(action)
      setEmail('')
      setUsername('')
      setPassword('')
      setPassword2('')
      }
    else{
      console.log('Unsuccessful')
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
      placeholder="Enter user name"
      leftIcon={
        <Icon
          containerStyle={{marginRight: 15}}
          name='user'
          type='font-awesome'
          size={24}
          color='#FFA26B'
        />
      }
      value={username}
      onChangeText={value => setUsername(value.trim())}
      />
      <Input
      placeholder="Enter email address"
      leftIcon={
        <Icon
          containerStyle={{marginRight: 15}}
          name='envelope'
          type='font-awesome'
          size={24}
          color='#FFA26B'
        /> }
        value={email}
        onChangeText={value => setEmail(value.trim())}
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
      value={password}
      onChangeText={value => setPassword(value.trim())}
      />
      <Input
      placeholder="Confirm password"
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
      value={password2}
      onChangeText={value => setPassword2(value.trim())}
      />

      </View>
      <View style={styles.button}>
      <Button
              title="Sign Up"
              icon={{
                name: 'user-plus',
                type: 'font-awesome',
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
                marginTop: 20,
                marginBottom: 0
                
              }}
              onPress={()=> {
                signUpUser(email, username, password, password2, usersList);
              }
               
              
              }

            />
     
      <Button
              containerStyle={{
                width: 335,
                minHeight: 400,
                marginTop: 5, 
                marginBottom: 20,
              }}
              title={<><Text style={styles.text}>Already have an account?</Text><Text style={styles.text2}> Sign In</Text></>}
              type="clear"
              titleStyle={{ color: '#FFA26B', fontSize: 24 }}
              onPress={() => navigation.navigate('Sign In') }

            />
            </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>  );
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
    flex: 3,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  },
  text: { color: '#FFA26B', fontSize: 24, fontStyle: 'italic', fontFamily: 'Roboto' },
  text2: { color: '#10c699', fontSize: 24, fontStyle: 'italic', fontFamily: 'Roboto' }
});
