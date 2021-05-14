import React, { useEffect, useState }  from 'react';
import {Text, View } from 'react-native';


export const randomJokes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    //fetch jokes from api
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
  
    //render jokes to screen
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text style={{ fontSize: 18, color: 'blue', textAlign: 'center'}}> {data.joke} </Text>
          </View>
        )}
      </View>
    );
}