import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';

import {toggleItemSelect, removeListItem} from '../store/actions/actions';

export default function ShoppingListItem(props)
{

  //Redux
  const isSelected = useSelector(state => state && state.listItems && state.listItems[props.listId] && state.listItems[props.listId][props.index] && state.listItems[props.listId][props.index].selected)
  const dispatch = useDispatch();

  //Returns checked box if selected
  const getCheckboxIconName = () =>{
    return isSelected ? 'ios-checkbox' : 'ios-checkbox-outline';
  }

  //Returns strikethrough if selected
  const getStrikethroughStyle = () =>{
    return isSelected ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {textDecorationLine:'none'}
  }

  //Handle our delete item window
  //Handles our delete item
  const handleLongPress = () =>{
    return Alert.alert(
      "Delete",
      "Delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => dispatch(removeListItem(props.listId, props.index))}
      ],
      { cancelable: false }
    );        
  }

  return (
    // TouchableWithoutFeedback won't animate on touch. Allow us to add a longpress without animating every time it's touched
    //* Using the spread operator lets us combine/overwrite styles
    <View style={{...GlobalStyles.dropShadow, ...styles.shadowContainer}}>
    <TouchableWithoutFeedback onLongPress={handleLongPress}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.touchIcon} onPress={()=>dispatch(toggleItemSelect(props.listId, props.index))}>
          <Ionicons name={getCheckboxIconName()} size={42} color={Colors.light.font}/>
        </TouchableOpacity>
        <Text style={{...GlobalStyles.text, ...styles.buttonText, ...getStrikethroughStyle()}}>{props.name}</Text>
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
    marginRight:20
  },
  shadowContainer:{
    backgroundColor:"#fff",
    marginVertical:10,
    marginHorizontal:10,
    padding:5,
  }, 
  buttonText:{
    fontSize:18
  }
})