import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const buttonWithBackground = props => {
    const {onPress} = props
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )

    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        width: 500,
        height: 70,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'space-around',
    }
})

export default buttonWithBackground;