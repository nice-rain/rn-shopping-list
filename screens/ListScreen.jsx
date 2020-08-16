import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import Button from '../components/Button';

import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';
import ShoppingListItem from '../components/ShoppingListItem';

export default function ListScreen(props)
{
    const listId = props.route && props.route.params && props.route.params.listId

    const listItems = useSelector(state => state.listItems[listId])
    const [newItemValue, setNewItemValue] = useState('');

    const updateNewItemValue = e =>{
        setNewItemValue(e.nativeEvent.value);
    }

    //Render individual shopping list buttons (Add render inside to gain access to navigation)
    const renderListItem = (itemData) =>{
        return(
            <ShoppingListItem name={itemData.item.name} listId={itemData.item.id} selected={itemData.item.selected} index={itemData.index} />
        )
    }

    return(
        <View style={{flex:1}}>
            <FlatList data={listItems} renderItem={renderListItem} style={{flex:1}}/>
            <View style={styles.addMenu}>
                <TextInput value={newItemValue} onChange={updateNewItemValue} placeholder="Add Item" style={styles.newItemInput}/>
                <Button onPress={()=>console.log(listItems)}>Add</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addMenu:{
        flexDirection:'row',
        padding:10,
        borderTopColor: Colors.light.listBorder,
        borderTopWidth:1
    },
    newItemInput:{
        flex:1,
        borderBottomColor: Colors.light.listBorder,
        padding:0
    }
})