import platformApi from "../api/platformApi";
import { platformTypes } from "../types";
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";

export const getAllPlatform = (cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get platforms",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: platformTypes.GET_ALL_PLATFORMS,
      payload: {
        request: {
          url: platformApi.GET_ALL_PLATFORMS,
          method: "GET",
        },
      },
    });
};

export const createPlatform = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "platformImage") {
      if (data["platformImage"].length > 0) {
        data["platformImage"].forEach((item, index) => {
          formData.append(`platformImage`, data["platformImage"][index]);
        });
      } else {
        formData.delete("platformImage");
      }
    } else {
      formData.append(key, data[key]);
    }
  });
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "platform created successfully",
      errorMessage: "Failed to create platform",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: platformTypes.CREATE_PLATFORM,
      payload: {
        request: {
          url: platformApi.CREATE_PLATFORM,
          method: "POST",
          data: formData,
        },
      },
    });
};

export const updatePlatform = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "platformImage") {
      if (data["platformImage"].length > 0) {
        data["platformImage"].forEach((item, index) => {
          formData.append(`platformImage`, data["platformImage"][index]);
        });
      } else {
        formData.delete("platformImage");
      }
    } else {
      formData.append(key, data[key]);
    }
  });

  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "platform created successfully",
      errorMessage: "Failed to update platform",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: platformTypes.UPDATE_PLATFORM,
      payload: {
        request: {
          url: platformApi.UPDATE_PLATFORM,
          method: "PUT",
          data: formData,
        },
      },
    });
};

export const deletePlatform = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "platform deleted successfully",
      errorMessage: "Failed to delete platform",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: platformTypes.DELETE_PLATFORM,
      payload: {
        request: {
          url: platformApi.DELETE_PLATFORM,
          method: "DELETE",
          data: data,
        },
      },
    });
};
