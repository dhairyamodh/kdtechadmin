import { utilTypes } from "../types";
import setToken from "../../functions/setToken";
const initialstate = {
  themes: [],
  spinner: false,
  modalOpen: undefined,
  modalData: undefined,
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

    case utilTypes.OPEN_MODAL:
      return {
        ...state,
        modalOpen: action.payload.type,
        modalData: action.payload.data,
      };

    case utilTypes.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: undefined,
        modalData: undefined,
      };

    default:
      return state;
  }
};

export default utilReducer;
