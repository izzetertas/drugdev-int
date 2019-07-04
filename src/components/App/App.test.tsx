import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './App';

it('renders without crashing', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <ApolloProvider client={new ApolloClient({})}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
