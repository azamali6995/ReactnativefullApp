import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Auth
import Login from './src/Auth/Login';
//Stack
import Home from './src/Stack/Home'
import About from './src/Stack/About';
import Contact from './src/Stack/Contact';
//Drawer
import Location from './src/Drawer/Location';
import MyAlfha from './src/Drawer/MyAlfha'; 
//Tab 
import Profile from './src/Tab/Profile'; 
import Setting from './src/Tab/Setting';
// import Contact from './src/Contact';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  )
}
export default App

const authNavigator =()=>{
  <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
}  

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }} >
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}