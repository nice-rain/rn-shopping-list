import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function ShoppingListItem(props)
{
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'grey',
    marginVertical:10,
    padding:15,
    borderRadius:2
  }
})