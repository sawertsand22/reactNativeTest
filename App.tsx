import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo/apolloClient';
import HomeScreen from './screens/HomeScreen';

export default function App() {
return (
<ApolloProvider client={apolloClient}>
<HomeScreen client={apolloClient} />
</ApolloProvider>
);
}