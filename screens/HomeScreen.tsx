import React from 'react';


import { View,TouchableOpacity, Image,ScrollAreaView,ScrollView, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { StackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { GET_CHARACTERS } from '../queries';
import apolloClient from '../apollo/apolloClient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
const { loading, error, data } = useQuery(GET_CHARACTERS);

if (loading) return <ActivityIndicator />;
if (error) return <Text>Error: {error.message}</Text>;

return (
<View style={{backgroundColor: '#4cbb17',}}>
    <ScrollView>
    {data.characters.results.map((character, id) => (

        <View key={id} style={{flex: 0.3,

                                       backgroundColor: '#4cbb17',
                                       borderWidth: 1,
                                       borderColor: 'black',
                                       marginBottom: 19}}>
        <TouchableOpacity onPress ={ () =>navigation.navigate('Details',
        { param: character.id  } ) }

        >

        <Image source={{uri: `${character.image}`}}
        style={{width: 420, height: 400}}
         />
        <Text>{character.name}</Text>


        </TouchableOpacity>
    </View>

    ))}
    </ScrollView>
</View>
);
}
export default HomeScreen;