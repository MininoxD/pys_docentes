
import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { useToken } from './useToken'
const uri = process.env.REACT_APP_GRAPHQL
const httpLink = new createHttpLink({ uri });

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          Authorization: authToken,
        },
      });
    }
    return forward(operation);
  });

const cache = new InMemoryCache({});

export const useAppApolloClient = () => {
  const authToken = useToken();
  return new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache,
  });
};