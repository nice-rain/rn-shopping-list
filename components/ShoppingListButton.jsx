import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


//Button that shows up on home screen
export default function ShoppingListButton({name, color, navigation})
{

    const handleNavigation = () =>{
        navigation.navigate('List', {title:name, color})
    }

    return (
        <TouchableOpacity style={styles.item} onPress={handleNavigation}>
            <View style={styles.button}>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
    },
    button:{
    }
})