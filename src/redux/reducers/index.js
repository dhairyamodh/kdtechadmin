import { combineReducers } from "redux";
import userReducer from "./userReducer";
import utilReducer from "./utilReducer";
import snackReducer from "./snackReducer";
import allDataReducer from "./allDataReducers";

export default combineReducers({
  all: allDataReducer,
  user: userReducer,
  util: utilReducer,
  snack: snackReducer,
});
