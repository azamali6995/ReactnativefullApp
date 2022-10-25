import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Auth
import SplashScreen from './src/SplashScreen';
import Login from './src/Auth/Login';
import SignUp from './src/Auth/SignUp';

//Stack
import Home from './src/Stack/Home'
import Contact from './src/Stack/Contact';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const DrawerNavigationRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="DrawerNavigationRoutes" component={DrawerNavigationRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App








