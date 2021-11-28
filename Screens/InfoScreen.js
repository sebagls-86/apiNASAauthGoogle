import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export class InfoScreen extends React.Component{

    render() {
        return (
          <View style={styles.container}>
              <Image source={require('../assets/fondo_naturaleza.jpeg')} style={{position: 'absolute', zIndex: -1}}/>
            <Text style={styles.titulo}> Creado por </Text>
            <Text style={styles.titulo}>Sebastian Lopez Sosa</Text>
            <Text style={styles.titulo}>Aplicaciones Moviles 2021 </Text>
            <Text style={styles.titulo}>4to Cuatrimestre </Text>
            
          </View>
        );
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 8,
      
    },
    paragraph: {
      fontSize: 16,
      textAlign: 'justify',
      color: 'white'
      
    },
    titulo:{
      
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Handlee-Regular'
      
    },
    imagen:{
      width: 380,
      height: 200,
      justifyContent: 'center',
        alignItems: 'center',
      
  
    }
  });