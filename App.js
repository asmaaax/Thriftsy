
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen.JS';

import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { userReducer } from './src/redux/reducers';
import { state} from './src/redux/store';
import Tabs from './src/navigators/TabNavigators';




export default function App() {
  const Stack = createNativeStackNavigator()

  const store = createStore(userReducer, state)
  return (
  <Provider store={store}>
  <NavigationContainer>

    <Stack.Navigator initialRouteName='Sign In'>
      <Stack.Screen name='Sign In' component={SignInScreen} options={{title: '', headerBackVisible: false}}/>
      <Stack.Screen name='Sign Up' component={SignUpScreen} options={{title: '', headerBackVisible: false}}/>
      <Stack.Screen name='Tabs' component={Tabs} options={{title: '', headerBackVisible: false}}/>
    </Stack.Navigator>
      

      


  </NavigationContainer>     
 
  </Provider>
  );
}

