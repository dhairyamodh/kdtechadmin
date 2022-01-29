import categoryApi from "../api/categoryApi";
import { categoryTypes } from "../types";
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";


export const getAllCategories = (cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get categories",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: categoryTypes.GET_ALL_CATEGORIES,
      payload: {
        request: {
          url: categoryApi.GET_ALL_CATEGORIES,
          method: "GET",
        },
      },
    });
};

export const createCategory = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Category created successfully",
      errorMessage: "Failed to Login",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: categoryTypes.CREATE_CATEGORIES,
      payload: {
        request: {
          url: categoryApi.CREATE_CATEGORIES,
          method: "POST",
          data: data
        },
      },
    });
};

export const updateCategory = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Category created successfully",
      errorMessage: "Failed to Login",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: categoryTypes.UPDATE_CATEGORIES,
      payload: {
        request: {
          url: categoryApi.UPDATE_CATEGORIES,
          method: "PUT",
          data: data
        },
      },
    });
};

export const deleteCategory = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Category deleted successfully",
      errorMessage: "Failed to Login",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: categoryTypes.DELETE_CATEGORIES,
      payload: {
        request: {
          url: categoryApi.DELETE_CATEGORIES,
          method: "DELETE",
          data: data
        },
      },
    });
};
