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
      <ShoppingListButton name={itemData.item.name} index={itemData.index} navigation={navigation} />
    )
  }

  return(
  <View style={styles.screen}>
    <NewListModal/>
    <FlatList data={shoppingLists} renderItem={renderListItem} style={styles.list}/>
  </View>
  )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:"flex-start"
    },
    list:{
        flex:1,
    }
})