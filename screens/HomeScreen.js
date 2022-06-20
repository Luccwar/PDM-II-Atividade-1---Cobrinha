import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth,firestore } from '../firebase';
import AlissonScreen from './AlissonScreen';
import KaueScreen from './KaueScreen';
import LauraScreen from './LauraScreen';
import LucasScreen from './LucasScreen';
import LucasAntonioScreen from './LucasAntonioScreen';
import LeonardoScreen from './LeonardoScreen';
import MarcoScreen from './MarcoScreen';
import MateusScreen from './MateusScreen';
import RodrigoScreen from './RodrigoScreen';


function Oxe({ navigation }) {
  
}


const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  //this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;

  return (
      <Drawer.Navigator initialRouteName="Lucas">
        <Drawer.Screen name="Alisson" component={AlissonScreen} />
        <Drawer.Screen name="Kaue" component={KaueScreen} />
        <Drawer.Screen name="Laura" component={LauraScreen} />
        <Drawer.Screen name="Lucas" component={LucasScreen} />
        <Drawer.Screen name="Lucas Antônio" component={LucasAntonioScreen} />
        <Drawer.Screen name="Leonardo" component={LeonardoScreen} />
        <Drawer.Screen name="Marco" component={MarcoScreen} />
        <Drawer.Screen name="Mateus" component={MateusScreen} />
        <Drawer.Screen name="Rodrigo" component={RodrigoScreen} />
      </Drawer.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
