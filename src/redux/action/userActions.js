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

export const getAllBusinesses = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get businesses",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.GET_BUSINESS_DETAILS,
      payload: {
        request: {
          url: userApi.GET_ALL_BUSINESSES,
          method: "GET",
          params: { id: data }
        },
      },
    });
};

export const createBusiness = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'businessLogo') {
      formData.append('businessLogo', {})
      data['businessLogo'].forEach((item, index) => {
        formData.append(`businessLogo`, data['businessLogo'][index])
      })
    } else {
      formData.append(key, data[key])
    }
  });
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Business created successfully",
      errorMessage: "Failed to create business",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.CREATE_BUSINESS,
      payload: {
        request: {
          url: userApi.CREATE_BUSINESS,
          method: "POST",
          data: formData
        },
      },
    });
};

export const updateBusiness = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'businessLogo') {
      formData.append('businessLogo', {})
      data['businessLogo'].forEach((item, index) => {
        formData.append(`businessLogo`, data['businessLogo'][index])
      })
    } else {
      formData.append(key, data[key])
    }
  });
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Business updated successfully",
      errorMessage: "Failed to update business",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.UPDATE_BUSINESS,
      payload: {
        request: {
          url: userApi.UPDATE_BUSINESS,
          method: "PUT",
          data: formData
        },
      },
    });
};

export const deleteBusiness = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "User deleted successfully",
      errorMessage: "Failed to delete business",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: userTypes.DELETE_BUSINESS,
      payload: {
        request: {
          url: userApi.DELETE_BUSINESS,
          method: "DELETE",
          data: data
        },
      },
    });
};
