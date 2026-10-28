import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../utils/history";
import loaderReducer from "../shared/components/Spinner/reducer";
import aadhaar from "../screens/aadhaar/reducer";
import voter from "../screens/voter/reducer";
import loginReducer from "../screens/auth/reducers";
import dlFetchReducer from "../screens/drivingLicense/fetch/reducer";
import faceMatchReducer from "../screens/faceMatch/reducer";
import gstinReducer from "../screens/gstin/reducer";
import creditReducer from "../screens/creditVerification/reducer";
import rc from "../screens/rcVerification/reducer";
import bankAccountVerification from "../screens/bankAccountVerification/reducer";
import passportVerificationReducer from "../screens/passportVerification/verify/reducer";
import generateMrzReducer from "../screens/passportVerification/generateMrz/reducer";
import verifyMrzReducer from "../screens/passportVerification/verifyMrz/reducer";
import epfoReducer from "../screens/epfo/reducer";
import cowinVerificationReducer from "../screens/cowinVerification/reducer";
import insuranceAgentVerificationReducer from "../screens/insuranceAgentVerification/reducer";
import panReducer from "../screens/pan/reducers";
import epfo from "../screens/epfoVerification/reducer";
import msme from "../screens/msmeVerification/reducer";
import fssai from "../screens/fssai/reducer";
import complianceChecks from "../screens/complianceChecks/reducer";

const appReducer = combineReducers({
   router: connectRouter(history),
   auth: loginReducer,
   loader: loaderReducer,
   aadhaar,
   voter,
   dlFetch: dlFetchReducer,
   faceMatch: faceMatchReducer,
   gstin: gstinReducer,
   credit: creditReducer,
   rc,
   bankAccountVerification,
   passportVerification: passportVerificationReducer,
   generateMrz: generateMrzReducer,
   verifyMrz: verifyMrzReducer,
   // epfo: epfoReducer,
   cowinVerification: cowinVerificationReducer,
   insuranceAgentVerification: insuranceAgentVerificationReducer,
   pan: panReducer,
   epfo,
   msme,
   fssai,
   complianceChecks,
});

const rootReducer = (state, action) => {
   if (action.type === "LOGOUT") {
      state = undefined;
   }
   return appReducer(state, action);
};

export default rootReducer;
