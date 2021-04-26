import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.png")}
        >
            <View style={styles.logoContainer}>
                <Text style={styles.welcomeText}>How are you today?</Text>
            </View>
            <View style={styles.randombutton}>
                <Button title="Random Jokes" onPress={() => navigation.navigate('RandomJokes')} />   
            </View>
            <View style={styles.createbutton}>
                <Button 
                title="Create Jokes" 
                onPress={() => navigation.navigate('Create')} />
            </View>
        </ImageBackground> 
    );
}

export const randomJokes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch('https://icanhazdadjoke.com/')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
  
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
            <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
            <FlatList
              data={data.articles}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.id + '. ' + item.title}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
}

export const createJokes = () => {
    return (
        <View>
            <Text>Create jokes screen</Text>
            <Button title="Create" onPress={() => alert("todo!")} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    randombutton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    createbutton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,     
        alignItems: "center",  
    },
    welcomeText: {
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        color: 'white',
    },
})

//export default WelcomeScreen;