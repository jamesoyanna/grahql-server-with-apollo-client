
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client' 
import {onError} from '@apollo/client/link/error'

const erroLink = onError({graphqlErrors, networkErrors}) => {
    if(graphqlErrors)
}
const link = from ([
errorLink,
new HttpLink({
 uri: "http://localhost:5000/graphql"
})
])

const client = new ApolloClient({
cache: new InMemoryCache(),
link: link
})