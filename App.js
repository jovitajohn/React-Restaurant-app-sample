import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen';


function NavgigationBase ({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <Text>Base Screen</Text>
      <Button 
      title='Home'
      onPress={()=> navigation.navigate('Home')}/>
    </View>
  )
}
const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = 'Base' component = {NavgigationBase} />
        <Stack.Screen name = 'Home' component = {HomeScreen} /> 
        <Stack.Screen name = 'Details' component = {DetailScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
