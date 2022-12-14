import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Input, Icon, Button, Image } from '@rneui/base';
import React, { useState } from 'react';
import { togglePasswordVisibility } from '../hooks/togglePasswordVisiblity';
import { useSelector, useDispatch } from 'react-redux';
import DialogPrompt from '../components/DialogPrompt';

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
          payload: {userName: username, userEmail: userDetails.email1}
        }
        dispatch(action)
        console.log('LogIn Successful')
        return true
      }
        else {
          alert('User not found. Please crosscheck your details or Sign up')
          return false
        }
    }

  const logIn = (email, password, userList) => {
    let userDetails = {email1: email, password1: password}
    let checkDetails;
    if (email && password){
      checkDetails = checkUserDetails(userDetails, userList);
      if (checkDetails){
        setEmail('')
        setPassword('')
        return true
      }
      else {
        return false
      }
    }
    else{
      alert('Invalid input. All fields are required')
      return false
    }
  }
  
  const [showPrompt, setShowPrompt] = useState(false)
  const [showPrompt2, setShowPrompt2] = useState(false)

  const checkUserEmail = (email) => {
    
    const userFound =  usersList.filter(item => item.userEmail === email);
    console.log(userFound)
    if (userFound.length > 0){
      setEmail(email)
      setShowPrompt(false)
      setShowPrompt2(true)
      }
    else {
      setShowPrompt(false)
      alert('Sorry, this user does not exist. Crosscheck your details or Sign Up')
    }
  }

  const changePassword = (password) => {
    const action = {
      type: 'RESET_PASSWORD',
      payload: {userEmail: email, passWord: password}
    }
    dispatch(action)
    setShowPrompt2(false)
    alert('Password reset successfuly. Sign In with the updated details')
  }

  const resetPassword = () => {
    setShowPrompt(true);
  }

  const cancelFunction = () => {
    setShowPrompt(false);
    console.log('Cancelled')
  }
  
  return (
    <View style={styles.container}>
     
      <View style={styles.logo}>
        <Image
        source={ require('../../assets/logo2.png')}
        resizeMode='cover'
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      
      <View style={styles.container2}>
      <ScrollView>
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
      onChangeText={value => setEmail(value.trim())}
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
      onChangeText={value => setPassword(value.trim())}
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
               
                marginTop: 30,
                
              }}
              onPress={()=> {
                console.log(email)
                console.log(password)
                console.log(usersList)
                const logInSuccess = logIn(email, password, usersList)
                if (logInSuccess){
                navigation.navigate('Tabs')}
              }}
            />
      
      <Button
              containerStyle={{
                width: 335,
             
              }}
              title={<><Text style={styles.text}>Don't have an account?</Text><Text style={styles.text2}> Sign Up</Text></>}
              type="clear"
              titleStyle={{ color: '#FFA26B', fontSize: 24 }}
              onPress={() => navigation.navigate('Sign Up') }
            />
      <Button
              containerStyle={{
                width: 335,
               
              }}
              title={<><Text style={styles.text}>Forgot passsword?</Text><Text style={styles.text2}> Reset password</Text></>}
              type="clear"
              titleStyle={{ color: '#FFA26B', fontSize: 24 }}
              onPress={() => resetPassword() }
            />
            </View>
            <View>
            <DialogPrompt
        title={'Enter your details to reset your password'}
        description={'Enter your email'}
        placeholder={'Enter email'}
        visibility={showPrompt}
        cancelFunc={cancelFunction}
        submitFunc={checkUserEmail}/>
        <DialogPrompt
        title={'Enter your new password'}
        description={''}
        placeholder={'Enter password'}
        visibility={showPrompt2}
        cancelFunc={cancelFunction}
        submitFunc={changePassword}/>
        </View>
        </ScrollView> 
        </View>
        

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,

  },
  logo: {
    flex: 0.8,
    backgroundColor: 'red',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    
  },
  button: {
    flex: 2,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  },
  text: { color: '#FFA26B', fontSize: 24, fontStyle: 'italic', fontFamily: 'Roboto' },
  text2: { color: '#10c699', fontSize: 24, fontStyle: 'italic', fontFamily: 'Roboto' }
});
