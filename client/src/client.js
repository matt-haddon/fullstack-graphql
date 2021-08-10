// import { ApolloClient } from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
// import gql from 'graphql-tag'

/**
 * Create a new apollo client and export as default
 */
const link = 'http://localhost:4000/'
const cache = new InMemoryCache()
const client = new ApolloClient({uri: link, cache: cache})

export default client