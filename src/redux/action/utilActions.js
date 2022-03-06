import { utilTypes } from "../types";

export const getAllThemes = (data) => {
  return {
    type: utilTypes.GET_ALL_THEMES,
    payload: {
      request: {
        url: "/api/theme/all",
        method: "get",
      },
    },
  };
};

export const openModal = (type, data) => {
  return {
    type: utilTypes.OPEN_MODAL,
    payload: {
      type: type,
      data: data,
    },
  };
};
export const closeModal = (type, data) => {
  return {
    type: utilTypes.CLOSE_MODAL,
  };
};
