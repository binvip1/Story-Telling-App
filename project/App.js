import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createJokes, randomJokes } from "./app/screens/WelcomeScreen";
import {WelcomeScreen} from './app/screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Create" component={createJokes} />
        <Stack.Screen name="RandomJokes" component={randomJokes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
