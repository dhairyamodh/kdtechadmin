import authApi from "../api/authApi";
import userApi from "../api/userApi";
import { authTypes, userTypes } from "../types";
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";

export const loginUser = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Login Succcess",
      errorMessage: "Failed to Login",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: authTypes.LOGIN_USER,
      payload: {
        request: {
          url: authApi.LOGIN_USER,
          method: "post",
          data: data,
        },
      },
    });

};
export const logoutUser = () => {
  return {
    type: authTypes.LOGOUT_USER,
  };
};

export const getUserDetails = (token) => {
  return {
    type: userTypes.GET_USER_DETAILS,
    payload: {
      request: {
        method: "get",
        url: authApi.GET_USER_DETAILS,
        // data: {token: token},
      },
    },
  };
};


export const getAllUsers = (cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get users",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.GET_ALL_USERS,
      payload: {
        request: {
          url: userApi.GET_ALL_USERS,
          method: "GET",
        },
      },
    });
};

export const createUser = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "User created successfully",
      errorMessage: "Failed to create user",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.CREATE_USER,
      payload: {
        request: {
          url: userApi.CREATE_USER,
          method: "POST",
          data: data
        },
      },
    });
};

export const updateUser = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "User updated successfully",
      errorMessage: "Failed to update user",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.UPDATE_USER,
      payload: {
        request: {
          url: userApi.UPDATE_USER,
          method: "PUT",
          data: data
        },
      },
    });
};

export const deleteUser = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "User deleted successfully",
      errorMessage: "Failed to delete user",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.DELETE_USER,
      payload: {
        request: {
          url: userApi.DELETE_USER,
          method: "DELETE",
          data: data
        },
      },
    });
};