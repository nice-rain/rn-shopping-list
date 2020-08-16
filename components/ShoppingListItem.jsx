import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function ShoppingListItem(props)
{
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}