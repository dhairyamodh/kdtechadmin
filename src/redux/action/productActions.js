import productApi from "../api/productApi";
import { productTypes } from "../types";
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";

export const getAllProducts = (cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get products",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.GET_ALL_PRODUCTS,
      payload: {
        request: {
          url: productApi.GET_ALL_PRODUCTS,
          method: "GET",
        },
      },
    });
};

export const addProduct = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "productImage") {
      if (data["productImage"].length > 0) {
        data["productImage"].forEach((item, index) => {
          formData.append(`productImage`, data["productImage"][index]);
        });
      } else {
        formData.delete("productImage");
      }
    } else {
      formData.append(key, data[key]);
    }
    if (key === "categoryId") {
      formData.delete("categoryId");
      formData.append("categoryId", JSON.stringify(data["categoryId"]));
    }
  });
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Product added successfully",
      errorMessage: "Failed to add product",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.CREATE_PRODUCT,
      payload: {
        request: {
          url: productApi.CREATE_PRODUCTS,
          method: "POST",
          data: formData,
        },
      },
    });
};

export const updateProduct = (data, cb, errorCb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "productImage") {
      if (data["productImage"].length > 0) {
        data["productImage"].forEach((item, index) => {
          formData.append(`productImage`, data["productImage"][index]);
        });
      } else {
        formData.delete("productImage");
      }
    } else {
      formData.append(key, data[key]);
    }
    if (key === "categoryId") {
      formData.delete("categoryId");
      formData.append("categoryId", JSON.stringify(data["categoryId"]));
    }
  });
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Product updated successfully",
      errorMessage: "Failed to update product",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.UPDATE_PRODUCT,
      payload: {
        request: {
          url: productApi.UPDATE_PRODUCTS,
          method: "PUT",
          data: formData,
        },
      },
    });
};

export const deleteProduct = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Product deleted successfully",
      errorMessage: "Failed to delete product",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.DELETE_PRODUCT,
      payload: {
        request: {
          url: productApi.DELETE_PRODUCTS,
          method: "DELETE",
          data: data,
        },
      },
    });
};

export const toggleExpire = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Expiration Changed Successfully",
      errorMessage: "Failed to expire product",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.TOGGLE_EXPIRE,
      payload: {
        request: {
          url: productApi.TOGGLE_EXPIRE,
          method: "PUT",
          data: data,
        },
      },
    });
};
export const sendNotification = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Notification sent Successfully",
      errorMessage: "Failed to send notification",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.SEND_NOTIFICATION,
      payload: {
        request: {
          url: productApi.SEND_NOTIFICATION,
          method: "post",
          data: data,
        },
      },
    });
};

export const getProductInfo = (data, cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "Product found successfully",
      errorMessage: "Failed to find product",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: productTypes.GET_PRODUCT_INFO,
      payload: {
        request: {
          url: productApi.GET_PRODUCT_INFO,
          method: "post",
          data: data,
        },
      },
    });
};
