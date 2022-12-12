import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ChatScreen from './src/screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function Tabs(){

    return(
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
  }}/>
<Tab.Screen name="Add" component={''} options={{
    tabBarLabel: 'add',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="plus" color={color} size={size} />
    ),
  }}/>
<Tab.Screen name="Chat" component={ChatScreen} options={{
    tabBarLabel: 'chat',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="chat" color={color} size={size} />
    ),
  }}/>
<Tab.Screen name="Profile" component={ProfileScreen} options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="account" color={color} size={size} />
    ),
  }}/>
   {/* <Tab.Screen name='Sign In' component={SignInScreen}/> */}
{/* <Tab.Screen name='Sign Up' component={SignUpScreen}/> */}
</Tab.Navigator>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
