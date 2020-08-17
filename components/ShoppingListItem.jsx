import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';

export default function ShoppingListItem(props)
{
  const getCheckboxIconName = () =>{
    return props.selected ? 'ios-checkbox' : 'ios-checkbox-outline';
  }

  return (
    // TouchableWithoutFeedback won't animate on touch. Allow us to add a longpress without animating every time it's touched
    //* Using the spread operator lets us combine/overwrite styles
    <View style={{...GlobalStyles.dropShadow, ...styles.shadowContainer}}>
    <TouchableWithoutFeedback onLongPress={()=>console.log('delete item?')}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.touchIcon} onPress={()=>console.log('touched item')}>
          <Ionicons name={getCheckboxIconName()} size={32} color={Colors.light.font}/>
        </TouchableOpacity>
        <Text style={GlobalStyles.text}>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    borderRadius:2,
    flexDirection:'row',
    alignItems:'center',
  },
  touchIcon:{
    marginRight:10
  },
  shadowContainer:{
    backgroundColor:"#fff",
    marginVertical:10,
    marginHorizontal:10,
    padding:15,
  }
})