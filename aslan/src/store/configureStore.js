import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";
import { setStore } from "./store";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["auth", "router", "shared"],
};

export default function configureStore(initialState = {}, history) {
   // Create the store with two middlewares
   // 1. sagaMiddleware: Makes redux-sagas work
   // 2. routerMiddleware: Syncs the location/URL path to the state
   const middlewares = [sagaMiddleware, routerMiddleware(history)];

   const enhancers = [applyMiddleware(...middlewares)];

   // If Redux DevTools Extension is installed use it, otherwise use Redux compose
   /* eslint-disable no-underscore-dangle */
   const composeEnhancers =
      process.env.NODE_ENV !== "production" && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
              // Prevent recomputing reducers for `replaceReducer`
              shouldHotReload: false,
           })
         : compose;
   /* eslint-enable */

   const persistedReducer = persistReducer(persistConfig, reducers);

   const store = createStore(persistedReducer, initialState, composeEnhancers(...enhancers));

   sagaMiddleware.run(sagas);
   setStore(store);
   return { persistor: persistStore(store), store };
}
