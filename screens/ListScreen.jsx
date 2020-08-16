import React from 'react';
import {View, Text} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';

export default function ListScreen(props)
{
    return(
        <View>
            <Text styles={GlobalStyles.text}>List Screen</Text>
        </View>
    )
}