import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import Navigation from "navigation";
import { persistor, store } from "store/configureStore";

const App = () => {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
               <Navigation />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   );
};

export default App;
