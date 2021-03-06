import { userTypes, authTypes } from "../types";
import setToken from "../../functions/setToken";
import removeToken from "../../functions/removeToken";

const initialstate = {
  isLogged: false,
  getDetailsLoading: false,
  token: undefined,
  users: [],
  closeModal: false,
};

const sizeReducer = (state = initialstate, action) => {
  const getData = () => action.payload.data;
  switch (action.type) {
    case authTypes.LOGIN_USER:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };

    case authTypes.LOGIN_USER_SUCCESS:
      setToken(getData().token);
      console.log("getData()", getData());
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        role: getData().user.role,
        name: getData().user.name,
        token: getData().token,
        ...getData().user,
      };

    case authTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        error: {
          message: action?.error?.response?.data?.message,
          status: "error",
        },
      };

    case userTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        getDetailsLoading: false,
        role: getData().user.role,
        name: getData().user.name,
        error: undefined,
        ...getData().user,
      };

    case userTypes.GET_USER_DETAILS_FAIL:
      return {
        ...state,
        // isLogged: false,

        isLoading: false,
        getDetailsLoading: false,
        error: {
          message: action?.error?.response?.data?.message,
          status: "error",
        },
      };
    case userTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: getData()?.data,
      };

    case userTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
      };

    case userTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
      };

    case userTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: getData(),
      };

    case authTypes.LOGOUT_USER:
      removeToken();
      return initialstate;
    default:
      return state;
  }
};

export default sizeReducer;
