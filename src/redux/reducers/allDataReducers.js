import { categoryTypes, productTypes, platformTypes, userTypes, offerTypes, dashboardTypes } from "../types";

const initialstate = {
  users: [],
  categories: [],
  products: [],
  platforms: [],
  offers: [],
  dashboard: undefined
};

const allDataReducer = (state = initialstate, action) => {
  switch (action.type) {

    case dashboardTypes.GET_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        dashboard: action.payload.data.data,
      };


    case productTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data.data,
      };
    case categoryTypes.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data.data,
      };
    case platformTypes.GET_ALL_PLATFORMS_SUCCESS:
      return {
        ...state,
        platforms: action.payload.data.data,
      };

    case offerTypes.GET_ALL_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload.data.data,
      };

    default:
      return state;
  }
};

export default allDataReducer;
