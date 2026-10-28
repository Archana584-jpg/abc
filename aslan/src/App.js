import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ConnectedRouter } from 'connected-react-router';
import history from "./utils/history";
import configureStore from "./store/configureStore";
import Navigation from "./navigation";

const initialState = {};
const { store, persistor } = configureStore(initialState, history);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Navigation />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
