import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'https://api.m3o.com/v1/',
  headers: {
    authorization: 'Bearer ZTIxNDlkMWQtYWM2Ny00OWEwLTk5YWQtMTJkZWFjYWE5MTdk',
  },
})
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
