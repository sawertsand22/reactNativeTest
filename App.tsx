import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo/apolloClient';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
return (
<ApolloProvider client={apolloClient}>
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
</NavigationContainer>

</ApolloProvider>


);
}