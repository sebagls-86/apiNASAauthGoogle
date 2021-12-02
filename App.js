import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useFonts} from '@use-expo/font'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LoginScreen} from './Screens/LoginScreen'
import {HomeScreen} from './Screens/HomeScreen'
import {InfoScreen} from './Screens/InfoScreen'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

<i class=""></i>
function HomeTabs() {
  return (
   
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Info') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#1E1855',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
    
  );
}


export default function App(){

  let [fontsLoaded] = useFonts({

      'Handlee-Regular': require('./assets/Handlee-Regular.ttf'),
      'Space-Rave': require('./assets/Space-Rave.ttf')
  });

  if(!fontsLoaded){

  return<View/>;
  }else {
      return(
        <NativeBaseProvider>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{title:"Bienvenido"}}/>
          <Stack.Screen name="Home" component={HomeTabs} options={{headerShown:false}}/>
          </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>

      );



  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
