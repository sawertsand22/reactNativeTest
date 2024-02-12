import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../queries';

export default function DetailsScreen({ route, navigation }) {
const { userId } = route.params;
const { loading, error, data } = useQuery(GET_USER_BY_ID, {
variables: { id: userId },
});

if (loading) return <Text>Loading...</Text>;
if (error) return <Text>Error :(</Text>;

const { user } = data;

return (
<View style={styles.container}>
<Text>Details Screen</Text>
<Text>Name: {user.name}</Text>
<Text>Email: {user.email}</Text>
<Button
title="Go to Home"
onPress={() => navigation.navigate('Home')}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
});