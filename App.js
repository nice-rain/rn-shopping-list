import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider, useDispatch} from 'react-redux';
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

//* If you use combined reducer. You just select with the reducer key as the first value
//* For example, if the key was 'test', you would select state.test.ReducerKey
// const rootReducer = combineReducers({
//   test:testReducer
// })

//Using a wrapper allows us to use dispatch within our App component. This way we can dispatch from navigator.
const ProviderWrapper = () =>{
  const store = createStore(shoppingListReducer);
  return <Provider store={store}>
    <App/>
  </Provider>
}





function App() {

  const dispatch = useDispatch();

  const toggleModalState = () =>{
    dispatch(toggleShowAddModal());
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {...GlobalStyles.headerTitle},
            headerTintColor: Colors.light.headerText,
            headerStyle:{...GlobalStyles.headerStyle}
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


export default ProviderWrapper;