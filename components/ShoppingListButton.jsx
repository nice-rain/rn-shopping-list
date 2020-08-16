import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';
import {removeList} from '../store/actions/actions';


//Button that shows up on home screen
export default function ShoppingListButton({name, color, navigation, index, listId})
{

  //Redux

  const dispatch = useDispatch();

  const handleNavigation = () =>{
    navigation.navigate('List', {title:name, color, listId})
  }


  //Handles our delete item
  const handleLongPress = () =>{
    return Alert.alert(
      "Delete",
      "Delete this item?",
      [
        {
          text: "Cancel",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => dispatch(removeList(index))}
      ],
      { cancelable: false }
    );        
  }

  return (
    <TouchableOpacity style={styles.item} onPress={handleNavigation} onLongPress={handleLongPress}>
      <View style={styles.button}>
        <Text style={GlobalStyles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}


//Styles are only applied to this, no need for a global here
const styles = StyleSheet.create({
    item:{
        backgroundColor:"#fff",
        flex:1,
        borderColor: Colors.light.listBorder,
        borderBottomWidth:1
    },
    button:{
        margin:20,
    }
})