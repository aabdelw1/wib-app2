import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';
import { Query, ApolloProvider, QueryResult, OperationVariables } from 'react-apollo'
import ApolloClient from "apollo-boost";
import Queries from './graphql/queries'
import { AppContext } from './context/AppContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const users = {
  ammar: "61bb43b3e37f4a6340b1e65b"
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <Query query={Queries.ONE_USER} variables={{ _id: users.ammar }}>
            {(result: QueryResult<any, OperationVariables>) => {
              const { loading, error, data } = result;
              if (loading || error) return <ActivityIndicator size="large" color="#0000ff" />
              return (
                <AppContext.Provider value={{ ...data.oneUser }}>
                  <Navigation colorScheme={colorScheme} />
                  <StatusBar />
                </AppContext.Provider>

              )
            }}
          </Query>
        </SafeAreaProvider>
      </ApolloProvider>

    );
  }
}
