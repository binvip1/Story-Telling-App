import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createJokes } from "./app/screens/createJokeScreen";
import {WelcomeScreen} from './app/screens/WelcomeScreen';
import { randomJokes } from "./app/screens/randomScreen";
import { searchJokes } from "./app/screens/searchJokeScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen}/>
        <Stack.Screen name="Create" component={createJokes} options={{title: 'Create Your Own Jokes'}}/>
        <Stack.Screen name="RandomJokes" component={randomJokes} options={{title: 'Random Jokes'}}/>
        <Stack.Screen name="SearchJokes" component={searchJokes} options={{title: 'Search Jokes'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
