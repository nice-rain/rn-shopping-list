import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import NewListModal from '../components/NewListModal';

import ShoppingListButton from '../components/ShoppingListButton';

const SHOPPINGLISTS = [
    {
        id:'l1',
        name:'Walmart',
        color: 'dodgerblue'
    },
    {
        id:'l2',
        name:'Home Depot',
        color: 'orange'
    }
]



export default function HomeScreen({navigation})
{

      //State for modal
     const [modalVisible, setModalVisible] = useState(false);

    //Render individual shopping list buttons (Add render inside to gain access to navigation)
    const renderListItem = (itemData) =>{

        return(
            <ShoppingListButton name={itemData.item.name} navigation={navigation} />
        )

    }

    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NewListModal modalVisible={modalVisible}/>
      <FlatList data={SHOPPINGLISTS} renderItem={renderListItem} />
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