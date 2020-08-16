import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import Colors from '../styles/Colors';
import GlobalStyles from '../styles/GlobalStyles';

export default function Button(props)
{
  return(
    <TouchableOpacity {...props} style={{...GlobalStyles.button, ...props.buttonStyles}}>
      <View>
        <Text style={{...GlobalStyles.buttonText, ...props.buttonTextStyles}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}