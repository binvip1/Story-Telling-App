import React from 'react';
import { Button, Text, View } from 'react-native';


export const createJokes = () => {
    return (
        <View>
            <Text>Create jokes screen</Text>
            <Button title="Create" onPress={() => alert("todo!")} />
        </View>
    )
}