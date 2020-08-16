import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

//Button that shows up on home screen
export default function ShoppingListButton({name, color, navigation})
{

    const handleNavigation = () =>{
        navigation.navigate('List', {title:name, color})
    }

    return (
        <TouchableOpacity style={styles.item} onPress={handleNavigation}>
            <View style={styles.button}>
                <Text style={GlobalStyles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'grey',
        flex:1
    },
    button:{
    }
})