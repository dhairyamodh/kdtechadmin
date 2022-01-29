import { utilTypes, restaurantTypes, userTypes, branchTypes } from "../types";
const initialstate = {
  message: "",
  severity: "",
  open: false,
};
let success = "success";
let error = "error";

const snackReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "HIDE_SNACKBAR":
      return initialstate;
    case "SHOW_SNACKBAR":
      return {
        ...state,
        message: action.payload.data || "Success",
        severity: action.payload.severity,
        open: true,
      };
    case userTypes.LOGOUT_USER:
      return {
        ...state,
        message: "Logged out",
        severity: success,
        open: true,
      };

    default:
      return state;
  }
};

export default snackReducer;
