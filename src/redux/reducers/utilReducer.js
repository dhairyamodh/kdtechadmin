import { utilTypes } from "../types";
import setToken from "../../functions/setToken";
const initialstate = {
  themes: [],
  spinner: false,
};

const utilReducer = (state = initialstate, action) => {
  switch (action.type) {
    case utilTypes.GET_ALL_THEMES_SUCCESS:
      return {
        ...state,
        themes: action.payload.data.data || [],
      };

    case "SPINNER_START":
      return {
        ...state,
        spinner: true,
      };

    case "SPINNER_STOP":
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
};

export default utilReducer;
