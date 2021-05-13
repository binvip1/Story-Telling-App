import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonWithBackground  from '../src/ButtonWithBackground';

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
                <ButtonWithBackground 
                title="Random Jokes"
                color="#fc5c65" 
                onPress={() => navigation.navigate('RandomJokes')} />
            </View>
            <View style={styles.searchButton}>
                <ButtonWithBackground 
                title="Search Jokes"
                color="#A52A2A"
                onPress={() => navigation.navigate('SearchJokes')}/>
            </View>
            <View style={styles.createbutton}>
                <ButtonWithBackground
                title="Create Jokes" 
                color="#4ecdc4"
                onPress={() => navigation.navigate('Create')} />
            </View>
        </ImageBackground> 
    );
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
        alignItems: "center",
    },
    createbutton: {
        width: '100%',
        height: 70,
        alignItems: "center",
    },
    searchButton: {
        width: '100%',
        height: 70,
        alignItems: "center",
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