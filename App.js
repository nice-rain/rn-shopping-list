import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from './components/CustomHeaderButton';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerRight: () =>
              (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item title='Favorite' iconName='ios-add' onPress={()=>console.log('opening modal')}/>
                </HeaderButtons>
              )
          }} />
        <Stack.Screen 
          name="List" 
          component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
