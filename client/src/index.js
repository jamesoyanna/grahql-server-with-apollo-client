import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Grapql Error', ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:5000/graphql",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
