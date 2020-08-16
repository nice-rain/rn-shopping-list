
import {StyleSheet} from 'react-native';
import Colors from './Colors';

//Global Stylesheet
const GlobalStyles = StyleSheet.create({
    text:{
        color: Colors.light.font
    },
    headerTitle:{
        color: Colors.light.headerText
    },
    headerStyle:{
        backgroundColor: Colors.light.primary
    }

});

export default GlobalStyles;