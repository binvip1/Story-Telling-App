import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import Form from '../src/Form';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from "expo-app-loading"

export const createJokes = () => {
    const [ready, setReady] = useState(false)
    const [joke, setJoke] = useState();
    const [jokeItems, setJokeItems] = useState([])

    //function to add new jokes
    const handleAddJokes = () => {
      Keyboard.dismiss();
      const newJokes = [...jokeItems, joke]
      
      AsyncStorage.setItem("storedItems", JSON.stringify(newJokes)).then(() => {
        setJokeItems(newJokes);
        setJoke(null);
      }).catch((error) => console.log(error))

    }
  
    //function to delete jokes
    const deleteJokes = (index) => {
      let itemsCopy = [...jokeItems];
      itemsCopy.splice(index, 1);
      AsyncStorage.setItem("storedItems", JSON.stringify(itemsCopy)).then(() => {
        setJokeItems(itemsCopy)
      }).catch((error) => console.log(error))
    }

    //function to load saved jokes
    const loadJokes = () => {
      AsyncStorage.getItem("storedItems").then(data => {
        if (data != null) {
          setJokeItems(JSON.parse(data))
        }
      }).catch((error) => console.log(error))
    }

    //function to delete all jokes
    const handleClearJokes = () => {
      AsyncStorage.setItem("storedItems", JSON.stringify([])).then(() => {
        setJokeItems([])
      }).catch(error => console.log(error))
    }

    //Load saved jokes
    if(!ready) {
      return (
        <AppLoading 
          startAsync={loadJokes}
          onFinish={() => setReady(true)}
          onError={console.warn}
        />
      )
    }
    
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
  
        <View style={styles.jokesWrapper}>
          <Text style={styles.sectionTitle}>My Jokes</Text>
          <View style={styles.items}>     
          {/* render the newly created jokes */}
            {
              jokeItems.map((item, index) => {
                return (
                  <View key={index}>
                    <Form text={item} />
                    <TouchableOpacity onPress={() => deleteJokes(index)}> 
                      <View style={styles.iconList}>
                        <MaterialCommunityIcons
                        name="trash-can"
                        size={25}
                        style={{color: "blue"}} 
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
        </View>
          
        </ScrollView>
  
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeJokesWrapper}
        >
          {/* Add new jokes, delete all jokes and text input to input new jokes */}
          <TextInput style={styles.input} placeholder={'Add a joke'} value={joke} onChangeText={text => setJoke(text)} />
          <TouchableOpacity onPress={() => handleAddJokes()}>
            <View style={styles.addWrapper}>
              <MaterialCommunityIcons
              name="border-color"
              size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleClearJokes()}>
            <View style={styles.deleteWrapper}>
              <MaterialCommunityIcons 
              name="delete-alert"
              size={20}/>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    jokesWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeJokesWrapper: {
      position: 'absolute',
      top: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 50,
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    deleteWrapper: {
      width: 50,
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    iconList: {
      alignItems: 'center',
    }
  });