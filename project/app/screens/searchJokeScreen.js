import React from 'react';
import {Text, View, FlatList, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { useState } from 'react';

export const searchJokes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState(null);

    //function to fetch jokes from api
    const searchButton = async () => {
        Keyboard.dismiss()

        fetch(`https://icanhazdadjoke.com/search?term=${keyword}`, {  
            method: 'GET',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json',                
             },
        })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    return (
       
            <View style={{ flex: 1, padding: 24 }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeJokesWrapper}
                >
                    {/* Searchbar and search button */}
                    <TextInput style={styles.input} placeholder={'Type a keyword'} value={keyword} onChangeText={text => setKeyword(text)} />
                    <TouchableOpacity onPress={() => searchButton()}>
                        <View style={styles.addWrapper}>
                            <MaterialCommunityIcons
                                name="magnify"
                                size={20} />
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView> 
                {/* if setLoading is true then show Loading otherwise show jokes */}
            {isLoading ? <Text style={styles.isLoading}>Loading...</Text> : 
            ( <View style={styles.jokeList}>
                <FlatList
                data={data.results}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View style={styles.item}> 
                        <Text>{`${item.joke} \n (id: ${item.id})`}</Text>
                    </View>
                )}
                />
                </View>
            )}
            </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    writeJokesWrapper: {
        position: 'absolute',
        top: 20,
        left: 10,
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
    jokeList: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 55,
    },
    isLoading: {
        top: 65,
        alignItems: 'center',
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
})