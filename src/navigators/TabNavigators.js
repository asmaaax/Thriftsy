import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import { StyleSheet } from 'react-native';
import AddItemScreen from '../screens/AddItemScreen';


const Tab = createBottomTabNavigator();

export default function Tabs(){

    return(
<Tab.Navigator
screenOptions={{
    tabBarActiveTintColor: '#FFA26B',
    headerShown: false
  }}>
<Tab.Screen name="Home" component={HomeScreen} options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
  }}/>
<Tab.Screen name="Add" component={AddItemScreen} options={{
    tabBarLabel: 'Add Item',
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
