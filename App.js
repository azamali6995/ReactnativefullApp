import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

//Stack
import Home from './src/Home'
import Details from './src/Details';
//Drawer
import Location from './src/Drawer/Location';
import MyAlfha from './src/Drawer/MyAlfha';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>

  )

}
export default App

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }} initialRouteName={{ Home }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Home" component={StackNavigation} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="MyAlfha" component={MyAlfha} />
    </Drawer.Navigator>
  )
}