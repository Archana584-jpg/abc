import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import productsReducer from "../screens/products/reducer";
import history from "../utils/history";
import authReducer from "../screens/login/reducer";
import signUpReducer from "../screens/signUp/reducer";
import credentialsReducer from "../screens/credentials/reducer";
import resetPasswordReducer from "../screens/resetPassword/reducer";
import dashboardReducer from "../screens/dashboardAndLogs/reducer";
import sharedReducer from "../shared/reducer";
import accountActivationReducer from "../shared/components/AccountActivation/reducer";
import sandboxReducer from "../screens/sandbox/reducer";
import { RESET_REDUCER_STATES_WRT_KEYS } from "../shared/actions";
import { LOGOUT_SUCCESS } from "../screens/login/actions";
import bulkUploadReducer from "../screens/bulkUpload/reducer";
import xToDetailsReducer from "../screens/xToDetails/reducer";

const appReducer = combineReducers({
   router: connectRouter(history),
   auth: authReducer,
   signUp: signUpReducer,
   products: productsReducer,
   dashboardAndLogs: dashboardReducer,
   credentials: credentialsReducer,
   resetPassword: resetPasswordReducer,
   shared: sharedReducer,
   accountActivation: accountActivationReducer,
   sandbox: sandboxReducer,
   bulkUpload: bulkUploadReducer,
   xToDetails: xToDetailsReducer,
});

const resetStateWRTKey = (parentKey, key, value, initialState) => ({
   ...initialState,
   [parentKey]: { ...initialState[parentKey], [key]: value },
});

const logoutActionTypes = [LOGOUT_SUCCESS];

const rootReducer = (state, action) => {
   if (action.type === RESET_REDUCER_STATES_WRT_KEYS) {
      Object.entries(action.data.states).forEach(([key, value]) => {
         state = resetStateWRTKey(action.data.key, key, value, state);
      });
   }
   if (logoutActionTypes.includes(action.type)) {
      state = undefined;
   }
   return appReducer(state, action);
};

export default rootReducer;
