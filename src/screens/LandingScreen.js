import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button, Image } from '@rneui/base';
import React from 'react';
import MyButton from '../components/MyButton';
import MyIcon from '../components/MyIcon';


export default function LandingScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                source={ require('../../assets/logo2.png')}
                containerStyle={styles.image}
                PlaceholderContent={<ActivityIndicator/>}/>
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
                    marginTop: 15,
                    
                }}
                onPress={()=> navigation.navigate('Sign In')}
                
                />
        <Button
                title="Sign Up"
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
                    marginTop: 15,
                    
                }}
                onPress={()=> navigation.navigate('Sign Up')}
                
                />
      </View>
      <View style={styles.button2}>
                    <MyButton text={"About"}/>
                    <MyButton text={"Terms and Conditions"}/>

      </View>
      <View style={styles.icon}>
            <MyIcon name={"facebook"}/>
            <MyIcon name={"twitter"}/>
            <MyIcon name={"linkedin"}/>
            <MyIcon name={"whatsapp"}/>

      </View>
      <StatusBar style="auto" />

    </View>

    );}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    flex: 1,
    resizeMethod: 'cover',
    width: '100%',
    height: '100%'
  },
  logo: {
    flex: 2.5, 
    backgroundColor: "#FFF", 
  },
 
  button: {
    flex: 1.5,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  },
  button2: {
    flex: 1, backgroundColor:'#FFF'
  },
  icon: { 
    flex: 0.5, 
    backgroundColor:'#FFF', 
    flexDirection: 'row', 
    justifyContent: 'space-around' }
});
