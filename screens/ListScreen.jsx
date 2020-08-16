import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import Button from '../components/Button';

import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';

export default function ListScreen(props)
{
    const listId = props.route && props.route.params && props.route.params.listId

    const listItems = useSelector(state => state.listItems[listId])
    const [newItemValue, setNewItemValue] = useState('');

    const updateNewItemValue = e =>{
        setNewItemValue(e.nativeEvent.value);
    }


    console.log('re-rendered');

    return(
        <View style={{flex:1}}>
            <FlatList style={{flex:1}}/>
            <Text styles={GlobalStyles.text}>List Screen</Text>
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