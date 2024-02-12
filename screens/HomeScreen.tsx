import React from 'react';
import { View, Image,ScrollAreaView,ScrollView, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries';

export default function HomeScreen() {
const { loading, error, data } = useQuery(GET_CHARACTERS);

if (loading) return <ActivityIndicator />;
if (error) return <Text>Error: {error.message}</Text>;

return (
<View>
<ScrollView>
{data.characters.results.map((character, id) => (
<View key={id}>
<Image source={{uri: `${character.image}`}}
style={{width: 400, height: 400}}
/>
<Text>{character.name}</Text>
<Text>{character.image}</Text>
<Text>{character.id}</Text>
</View>
))}
</ScrollView>
</View>
);
}
export default HomeScreen;