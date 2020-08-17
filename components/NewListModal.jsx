import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {View, Modal, TouchableHighlight, Alert, StyleSheet, Text, TextInput} from 'react-native'
import {toggleShowAddModal, addList} from '../store/actions/actions';

import Button from '../components/Button';

import Colors from '../styles/Colors';
import GlobalStyles from '../styles/GlobalStyles';

export default function NewListModal({handleItemAdd}){

    //Redux
    const modalVisible = useSelector(state => state.addModalIsVisible);
    const dispatch = useDispatch();

    const [modalValue, setModalValue] = useState('');

    //We use e.nativeEvent instead of e.target
    const updateModalValue = e =>{
        if(e && e.nativeEvent){
            setModalValue(e.nativeEvent.text);
        }
    }

    //Check to make sure our item exists
    const handleAddItem = () =>{
      if(modalValue.length)
      {
          dispatch(addList({id: uuidv4(), name: modalValue, color:'red'}));
          setModalValue('');
          dispatch(toggleShowAddModal());

      }
  }

    return (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{...GlobalStyles.text, ...styles.headingText}}>Add New List</Text>
                <TextInput onChange={updateModalValue}
                    value={modalValue} 
                    placeholder={'List Name'}
                    style={styles.input} />
                
                <View style={styles.buttonView}>
                  <Button
                    style={{backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalValue('');
                      dispatch(toggleShowAddModal());
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    style={{backgroundColor: "#2196F3" }}
                    onPress={handleAddItem}
                  >
                    Add
                  </Button>
                </View>

              </View>
            </View>
          </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      width: '80%',
      maxWidth: 500,
      backgroundColor: "white",
      borderRadius: 2,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    buttonView:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      width:'100%'
    },
    input:{
      borderBottomColor:Colors.light.font,
      borderBottomWidth:1,
      width: '80%',
      maxWidth: 500,
      marginTop:10,
      marginBottom:20
    },
    //Note: This should be a global style if we were going to reuse it
    headingText:{
      fontSize: 18,
      fontWeight:"bold"
    } 
    
  });