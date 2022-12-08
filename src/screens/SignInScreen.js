import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon, Button } from '@rneui/base';
import React, { useState } from 'react';
import { togglePasswordVisibility } from '../hooks/togglePasswordVisiblity';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { rightIcon, passwordVisibility, changePasswordVisibility } = togglePasswordVisibility();
  return (
    // <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View style={styles.logo}><Text>This space is for Logo</Text></View>
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
                minHeight: 400,
                marginTop: 30,
                
              }}
              onPress={()=> console.log(`Email is ${email} and Password is ${password}`)}
            />
     
      </View>
      <View style={{backgroundColor: '#FFF', flex: 1}}>
      
      <Button
              containerStyle={{
                width: 335,
                minHeight: 400,
                marginBottom: 20,
              }}
              title={<><Text style={styles.text}>Don't have an account?</Text><Text style={styles.text2}> Sign Up</Text></>}
              type="clear"
              titleStyle={{ color: '#FFA26B', fontSize: 24 }}
              onPress={() => navigation.navigate('Sign Up') }
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
    maxHeight: '25%'
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
    marginTop: 20
  },
  text: { color: '#FFA26B', fontSize: 24, fontStyle: 'italic' },
  text2: { color: '#10c699', fontSize: 24, fontStyle: 'italic' }
});
