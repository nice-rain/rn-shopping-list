import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation})
{
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.gridItem} onPress={()=>navigation.navigate(
                    'List', 
                   {categoryId: 'test',
                    title: 'test'
                    }
                )}>
                <View >
                    <Text>List</Text>
                </View>
            </TouchableOpacity>
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