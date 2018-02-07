/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './containers/App/App';
import apolloClient from './apolloClient';
import registerServiceWorker from './registerServiceWorker';
import './globalStyles';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'),
);

registerServiceWorker();

