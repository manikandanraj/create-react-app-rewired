import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';

const httpLink = new HttpLink({ uri: `${process.env.REACT_APP_API_URL}/graphql` });

const authLink = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      Authorization: sessionStorage.getItem('token') || null,
    },
  });
  return forward(operation);
});

const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  console.log('Error occured, operation details : ', operation);
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloClient = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
