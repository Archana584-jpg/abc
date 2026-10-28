import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import configureStore from './store/configureStore';
import Navigation from './navigation'

const initialState = {};
const { store } = configureStore(initialState, history);

export const App = () => {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Navigation />
        </ConnectedRouter>
    </Provider>
  );
}