import { combineReducers } from "redux";
import aadhaarPanLinkReducer from "./aadhaarLink/reducer";
import panLiteReducer from "./fetch/reducer";
import panDetailedReducer from "./fetchDetailed/reducer";
import tdsCreditReducer from "./fetchTdsCredit/reducer";
import panOCRReducer from "./ocr/reducer";
import panVerifyReducer from "./verify/reducer";
import verifyTdsReducer from "./verifyTdsCertificate/reducer";

export default combineReducers({
    aadhaarPanLink: aadhaarPanLinkReducer,
    panLite: panLiteReducer,
    panDetailed: panDetailedReducer,
    tdsCredit: tdsCreditReducer,
    panOCR: panOCRReducer,
    panVerify: panVerifyReducer,
    verifyTds: verifyTdsReducer,
});
