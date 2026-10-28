import { combineReducers } from "redux";
import uan from "./uan/reducer";
import latestEmployment from "./employmentDetails/reducer";
import passbook from "./passbook/reducer";
import employmentHistory from "./employmentHistory/reducer";

export default combineReducers({
  uan,
  latestEmployment,
  passbook,
  employmentHistory,
});
