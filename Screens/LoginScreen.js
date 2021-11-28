import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import * as Google from 'expo-auth-session/providers/google';


export function LoginScreen({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1099160884057-lj0qf1mun4rkhcafr9datrel33o6c2pa.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log(response);
      navigation.navigate("Home", {auth: response.authentication})
      }
  }, [response]);

  return (

    <View style={{flex:1, alignItems:'center'}}>
             <Image source={require('../assets/fondo_naturaleza.jpeg')} style={{position: 'absolute', zIndex: -1}}/>
                <Text style={{fontSize:50, marginVertical:50, color: 'white', fontFamily: 'Space-Rave'}}>Earth</Text>
                <View style={{marginTop:100}}>
                 
                <Button size="lg" 
                onPress={() => {
                    promptAsync();
                    }}> Login</Button>

                  
             
                </View>

                <View style={{position:'absolute', bottom:60,justifyContent:'center', alignItems:'center' }}>
                 <Text style={{fontSize:18, color: 'white'}}>from</Text>
                 <Text style={{fontSize:20, fontWeight:'bold', color: 'white'}}>Sr.Sebastian</Text>
                </View>
   
    </View>
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
