import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonWithBackground  from './ButtonWithBackground';

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
        //backgroundColor: "#fc5c65",
    },
    createbutton: {
        width: '100%',
        height: 70,
        alignItems: "center",
        //backgroundColor: "#4ecdc4",
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