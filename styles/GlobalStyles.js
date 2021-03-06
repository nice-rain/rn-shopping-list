
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
    },
    dropShadow:{
        shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:"#0000"
    },
    button:{
        backgroundColor:Colors.light.primary,
        padding:5,
    },
    buttonText:{
        color: 'white'
    }
});

const isEven = n =>{
    return n % 2 == 0;
}

export default GlobalStyles;