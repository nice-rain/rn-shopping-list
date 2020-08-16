import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import { useSelector } from 'react-redux';

import NewListModal from '../components/NewListModal';

import ShoppingListButton from '../components/ShoppingListButton';


export default function HomeScreen({navigation})
{
  //Redux
  const shoppingLists = useSelector(state => state.shoppingLists)


  //Render individual shopping list buttons (Add render inside to gain access to navigation)
  const renderListItem = (itemData) =>{
    return(
      <ShoppingListButton name={itemData.item.name} navigation={navigation} />
    )
  }

  return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <NewListModal/>
    <FlatList data={shoppingLists} renderItem={renderListItem} />
  </View>
  )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        marginVertical: 40
    }
})