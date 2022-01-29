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
