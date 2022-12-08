import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon, Button } from '@rneui/base';
import { togglePasswordVisibility } from '../hooks/togglePasswordVisiblity';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('')
  const { rightIcon, passwordVisibility, changePasswordVisibility } = togglePasswordVisibility();
  return (
    // <KeyboardAwareScrollView
    // resetScrollToCoords={{ x: 0, y: 0 }}
    // scrollEnabled={true}>
    
    <View style={styles.container}>
      <View style={styles.logo}><Text>This space is for Logo</Text></View>
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
      onChangeText={value => setUsername(value)}
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
        onChangeText={value => setEmail(value)}
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
      onChangeText={value => value => setPassword2(value)}
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
                minHeight: 400,
                marginTop: 20,
                marginBottom: 0
                
              }}
              onPress={()=> {
                
                console.log(`Email is ${email} and Password is ${password}`)}
               
              
              }

            />
     
      </View>
      <View style={{backgroundColor: '#FFF', flex: 1}}>
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
// </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
  },
  logo: {
    flex: 1,
    backgroundColor: '#FFA26B',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '10%'
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
  text: { color: '#FFA26B', fontSize: 24, fontStyle: 'italic' },
  text2: { color: '#10c699', fontSize: 24, fontStyle: 'italic' }
});
