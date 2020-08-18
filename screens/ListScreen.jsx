import React, {useState} from 'react';
import {View, FlatList, TextInput, Keyboard, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button';
import Colors from '../styles/Colors';
import ShoppingListItem from '../components/ShoppingListItem';
import {addListItem} from '../store/actions/actions';
export default function ListScreen(props)
{
    const listId = props.route && props.route.params && props.route.params.listId
    const dispatch = useDispatch();
    const listItems = useSelector(state => state.listItems[listId])
    const [newItemValue, setNewItemValue] = useState('');

    const updateNewItemValue = e =>{
        if(e && e.nativeEvent){
            setNewItemValue(e.nativeEvent.text);
        }
    }

    const handleAddItem = () =>{
        if(newItemValue.length)
        {
            Keyboard.dismiss();
            dispatch(addListItem({id: uuidv4(), name: newItemValue, selected:false}, listId));
            setNewItemValue('');
        }
    }

    //Render individual shopping list buttons (Add render inside to gain access to navigation)
    const renderListItem = (itemData) =>{
        return(
            <ShoppingListItem name={itemData.item.name} listId={listId} selected={itemData.item.selected} index={itemData.index} />
        )
    }

    //Uncomment this to add to bottom
    //const flatListItems = listItems.slice().reverse()


    return(
        <View style={{flex:1}}>
            <FlatList data={listItems} renderItem={renderListItem}  style={styles.itemList} contentContainerStyle={{paddingVertical:10}} />
            <View style={styles.addMenu}>
                <TextInput value={newItemValue} onChange={updateNewItemValue} placeholder="Add Item" style={styles.newItemInput}/>
                <Button onPress={handleAddItem}>Add</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addMenu:{
        flexDirection:'row',
        padding:10,
        borderTopColor: Colors.light.listBorder,
        borderTopWidth:1,
    },
    newItemInput:{
        flex:1,
        borderBottomColor: Colors.light.listBorder,
        padding:0
    },
    itemList:{
        flex:1,
        paddingHorizontal:10,
        }
})