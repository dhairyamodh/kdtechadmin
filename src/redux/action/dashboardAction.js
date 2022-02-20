import dashboardApi from "../api/dashboardApi";

import { dashboardTypes } from "../types";
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";


export const getDashboardData = (cb, errorCb) => {
  return (dispatch) =>
    checkIfAsyncReqSuccess(dispatch, {
      successMessage: "",
      errorMessage: "Failed to get categories",
      enableMessage: true,
      cb: cb,
      errorCb: errorCb,
      type: dashboardTypes.GET_DASHBOARD_DATA,
      payload: {
        request: {
          url: dashboardApi.GET_DASHBOARD,
          method: "GET",
        },
      },
    });
};


