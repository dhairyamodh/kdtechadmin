import offerApi from "../api/offerApi";
import { offerTypes } from "../types";
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";

export const getAllOffer = (cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get offers",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: offerTypes.GET_ALL_OFFERS,
      payload: {
        request: {
          url: offerApi.GET_ALL_OFFERS,
          method: "GET",
        },
      },
    });
};

export const createOffer = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "offerImage") {
      if (data["offerImage"].length > 0) {
        data["offerImage"].forEach((item, index) => {
          formData.append(`offerImage`, data["offerImage"][index]);
        });
      } else {
        formData.delete("offerImage");
      }
    } else {
      formData.append(key, data[key]);
    }
  });
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "offer created successfully",
      errorMessage: "Failed to create offer",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: offerTypes.CREATE_OFFER,
      payload: {
        request: {
          url: offerApi.CREATE_OFFER,
          method: "POST",
          data: formData,
        },
      },
    });
};

export const updateOffer = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "offerImage") {
      if (data["offerImage"].length > 0) {
        data["offerImage"].forEach((item, index) => {
          formData.append(`offerImage`, data["offerImage"][index]);
        });
      } else {
        formData.delete("offerImage");
      }
    } else {
      formData.append(key, data[key]);
    }
  });

  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "offer created successfully",
      errorMessage: "Failed to update offer",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: offerTypes.UPDATE_OFFER,
      payload: {
        request: {
          url: offerApi.UPDATE_OFFER,
          method: "PUT",
          data: formData,
        },
      },
    });
};

export const deleteOffer = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "offer deleted successfully",
      errorMessage: "Failed to delete offer",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: offerTypes.DELETE_OFFER,
      payload: {
        request: {
          url: offerApi.DELETE_OFFER,
          method: "DELETE",
          data: data,
        },
      },
    });
};
