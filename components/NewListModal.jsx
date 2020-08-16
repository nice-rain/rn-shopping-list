import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {View, Modal, TouchableHighlight, Alert, StyleSheet, Text, TextInput} from 'react-native'
import {toggleShowAddModal, addList} from '../store/actions/actions';


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

    return (
        <View style={styles.centeredView}>
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
                <Text style={styles.modalText}>Hello World!</Text>
            
                <TextInput onChange={updateModalValue}
                    value={modalValue} />
                
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalValue('');
                    dispatch(toggleShowAddModal());
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    dispatch(addList({id: uuidv4(), name: modalValue, color:'red'}))
                    dispatch(toggleShowAddModal());
                  }}
                >
                  <Text style={styles.textStyle}>Add</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
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
      backgroundColor: "white",
      borderRadius: 20,
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
    }
  });