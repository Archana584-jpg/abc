import { combineReducers } from "redux";
import { LOGOUT_SUCCESS } from "screens/login/actionTypes";
import loginReducer from "screens/login/reducer";
import sharedReducer from "shared/reducer";
import applicationReducer from "screens/application/reducer";
import applicationsReducer from "screens/applications/reducer";
import resetPasswordReducer from "screens/resetPassword/reducer";
import createApplicationReducer from "screens/createApplication/reducer";

const appReducer = combineReducers({
   login: loginReducer,
   shared: sharedReducer,
   application: applicationReducer,
   applications: applicationsReducer,
   resetPassword: resetPasswordReducer,
   createApplication: createApplicationReducer,
});

const rootReducer = (state, action) => {
   if (action.type === LOGOUT_SUCCESS) {
      state = undefined;
   }
   return appReducer(state, action);
};

export default rootReducer;
