import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux
import {createStore, combineReducers} from 'redux';
import {Provider, useDispatch} from 'react-redux';

//Simple local storage library to store and persist redux
import { persistStore, persistReducer } from 'redux-persist';

//Library needed for redux-persist to work with react native
import AsyncStorage from '@react-native-community/async-storage';

//Used to force react-native to wait until storage has 100% loaded
import { PersistGate } from 'redux-persist/integration/react';
 

import GlobalStyles from './styles/GlobalStyles';
import Colors from './styles/Colors';

//Screens
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from './components/CustomHeaderButton';
import shoppingListReducer from './store/reducers/shoppingListReducer';
import {toggleShowAddModal} from './store/actions/actions';

import 'react-native-get-random-values';


//Create our navigation stack
const Stack = createStackNavigator();


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, shoppingListReducer)

//Using a wrapper allows us to use dispatch within our App component. This way we can dispatch from navigator.
const ProviderWrapper = () =>{
  const store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

    <App/>
    </PersistGate>

  </Provider>
}





function App() {

  const dispatch = useDispatch();

  const toggleModalState = () =>{
    dispatch(toggleShowAddModal());
  }

  return (
      <NavigationContainer>
        <StatusBar style="light"/>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: GlobalStyles.headerTitle,
            headerTintColor: Colors.light.headerText,
            headerStyle: GlobalStyles.headerStyle
          }}
          >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              headerRight: () =>
                (
                  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title='Favorite' iconName='ios-add' onPress={toggleModalState}/>
                  </HeaderButtons>
                )
            }} />
          <Stack.Screen 
            name="List" 
            component={ListScreen}
             // By declaring as a function, we can pass params in through our route object
            options={({route}) => ({title: route.params.title})}
             />
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


export default ProviderWrapper;