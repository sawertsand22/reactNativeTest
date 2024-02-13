import React from 'react';
import { useState, useEffect } from 'react';
import { Button,Image, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries';
import { NavigationContainer } from '@react-navigation/native';
import { gql } from '@apollo/client';
import { render } from '@testing-library/react-native';

export const GET_CHARACTERS_BY_ID = gql`
query GetCharacter($param: ID!){
  character(id: $param) {
    image
    name
    status
    species

    gender
    location {
      name
    }
  }
}`;
export default function DetailsScreen({ route, navigation }) {
const {param} = route.params || {};
const { loading, error, data  } = useQuery(GET_CHARACTERS_BY_ID, { variables: {param},});

if(loading) return <Text>Loading..</Text>
if (error) return <Text>Error: {error.message}</Text>;
if(!data|| !data.character)
{
return<Text>НЕ РАБОАТЕТ</Text>}

return (
<View style={{}}>
<Button
title="Go to Home"
onPress={() => navigation.navigate('Home')}
/>
<Text style={styles.name}>{data.character.name}</Text>
 <Image source={{uri: `${data.character.image}`}}
        style={{width: 420, height: 400}}
         />
<Text style={styles.status}>Staus : {data.character.status}</Text>
<Text style={styles.species}> Species : {data.character.species}</Text>

<Text style={styles.gender}>Gender : {data.character.gender}</Text>
<Text style={styles.location}> Location : {data.character.location.name}</Text>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,

alignItems: 'center',
justifyContent: 'center',


},
name:
{
fontSize: 40,
backgroundColor: '#4cbb17',
}

});