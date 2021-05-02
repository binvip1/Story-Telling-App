import React from 'react';
import {Text, View } from 'react-native';

import { useEffect, useState } from 'react';


export const randomJokes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
        fetch('https://icanhazdadjoke.com', {  
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
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}> {data.joke} </Text>
          </View>
        )}
      </View>
    );
}