import { combineReducers } from "redux";
import { LOGOUT_SUCCESS } from "screens/login/actionTypes";
import loginReducer from "screens/login/reducer";
import nodeReducer from "screens/node_new/reducer";
import sharedReducer from "shared/reducer";

const appReducer = combineReducers({
   node: nodeReducer,
   login: loginReducer,
   shared: sharedReducer,
});

const rootReducer = (state, action) => {
   if (action.type === LOGOUT_SUCCESS) {
      state = {
         shared: {
            authConfig: state?.shared?.authConfig || {},
            applicationId: state?.shared?.applicationId || "",
         },
      };
   }
   return appReducer(state, action);
};

export default rootReducer;
