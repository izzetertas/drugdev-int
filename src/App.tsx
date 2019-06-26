import React, { Component } from "react";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { GRAPHQL_API_URL } from './constants'

import ContactList from './components/ContactList'

import logo from "./logo.svg";

import "./App.css";

const client = new ApolloClient({ uri: GRAPHQL_API_URL })

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <ContactList />
      </ApolloProvider>
    )
  }
}

export default App;
