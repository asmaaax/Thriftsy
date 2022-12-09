import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen.JS';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Sign Up'>
      <Stack.Screen name='Sign In' component={SignInScreen}/>
      <Stack.Screen name='Sign Up' component={SignUpScreen}/>
      <Stack.Screen name='Profile' component={ProfileScreen}/>
    </Stack.Navigator>
      

      
      {/* <StatusBar style="auto" /> */}

  </NavigationContainer>     
 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
