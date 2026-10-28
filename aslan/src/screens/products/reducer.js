import { combineReducers } from "redux";
import {
   GET_CATEGORIES_LOADING,
   GET_CATEGORIES_SUCCESS,
   GET_CATEGORIES_ERROR,
   GET_PRODUCTS_LOADING,
   GET_PRODUCTS_SUCCESS,
   GET_PRODUCTS_ERROR,
   GET_MY_PRODUCTS_LOADING,
   GET_MY_PRODUCTS_SUCCESS,
   GET_MY_PRODUCTS_ERROR,
   GET_PRODUCT_BY_ID_LOADING,
   GET_PRODUCT_BY_ID_SUCCESS,
   GET_PRODUCT_BY_ID_ERROR,
   GET_PRODUCT_BY_CATEGORY_ID_LOADING,
   GET_PRODUCT_BY_CATEGORY_ID_SUCCESS,
   GET_PRODUCT_BY_CATEGORY_ID_ERROR,
   GET_PRODUCT_ANALYTICS_REPORTS_LOADING,
   GET_PRODUCT_ANALYTICS_REPORTS_SUCCESS,
   GET_PRODUCT_ANALYTICS_REPORTS_ERROR,
   GET_ALL_PRODUCT_GROUPS_LOADING,
   GET_ALL_PRODUCT_GROUPS_SUCCESS,
   GET_ALL_PRODUCT_GROUPS_ERROR,
   GET_ALL_PRODUCT_STATUSES_LOADING,
   GET_ALL_PRODUCT_STATUSES_SUCCESS,
   GET_ALL_PRODUCT_STATUSES_ERROR,
   GET_SEARCHED_PRODUCTS_LOADING,
   GET_SEARCHED_PRODUCTS_SUCCESS,
   GET_SEARCHED_PRODUCTS_ERROR,
} from "screens/products/actions";
import { sortBy } from "lodash";

const categories = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case GET_CATEGORIES_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case GET_CATEGORIES_SUCCESS: {
         return {
            loading: false,
            list: sortBy(action.data, "priority"),
            error: "",
         };
      }
      case GET_CATEGORIES_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const products = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCTS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_PRODUCTS_SUCCESS: {
         const entities = sortBy(action.data.entities, "priority");
         return {
            loading: false,
            data: { ...action.data, entities: entities },
            error: "",
         };
      }
      case GET_PRODUCTS_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const myProducts = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case GET_MY_PRODUCTS_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case GET_MY_PRODUCTS_SUCCESS: {
         return {
            loading: false,
            list: action.data,
            error: "",
         };
      }
      case GET_MY_PRODUCTS_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productById = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCT_BY_ID_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case GET_PRODUCT_BY_ID_SUCCESS: {
         const productById = state.data;
         productById[action.data.id] = {
            ...action.data,
            offerings: action.data?.offerings?.filter((item) => !(item.name || item.title).includes("Deprecated")),
         };
         return {
            loading: false,
            data: productById,
            error: "",
         };
      }
      case GET_PRODUCT_BY_ID_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productByCategoryId = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCT_BY_CATEGORY_ID_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case GET_PRODUCT_BY_CATEGORY_ID_SUCCESS: {
         const { data } = action;
         const productByCategoryId = {};
         data.forEach((item) => {
            (item.categories || []).forEach((category) => {
               if (productByCategoryId[(category || {}).id])
                  productByCategoryId[(category || {}).id] = [...productByCategoryId[(category || {}).id], item];
               else productByCategoryId[(category || {}).id] = [item];
            });
         });
         return {
            loading: false,
            data: productByCategoryId,
            error: "",
         };
      }
      case GET_PRODUCT_BY_CATEGORY_ID_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productAnalyticsReports = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCT_ANALYTICS_REPORTS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_PRODUCT_ANALYTICS_REPORTS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_PRODUCT_ANALYTICS_REPORTS_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productGroups = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_ALL_PRODUCT_GROUPS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_ALL_PRODUCT_GROUPS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_ALL_PRODUCT_GROUPS_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productStatusesById = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_ALL_PRODUCT_STATUSES_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_ALL_PRODUCT_STATUSES_SUCCESS: {
         const data = {};
         ((action.data || {}).entities || []).forEach((item) => {
            data[item.id] = item;
         });
         return {
            loading: false,
            data: data,
            error: "",
         };
      }
      case GET_ALL_PRODUCT_STATUSES_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productsByKey = (state = { data: {} }, action) => {
   switch (action.type) {
      case GET_PRODUCTS_SUCCESS: {
         const data = {};
         action.data.entities.forEach((item) => {
            data[item.key] = item;
         });
         return {
            data: data,
         };
      }
      default:
         return state;
   }
};

const searchedProducts = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_SEARCHED_PRODUCTS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_SEARCHED_PRODUCTS_SUCCESS: {
         const entities = sortBy(action.data.entities, "priority");
         return {
            loading: false,
            data: { ...action.data, entities: entities },
            error: "",
         };
      }
      case GET_SEARCHED_PRODUCTS_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

export default combineReducers({
   products,
   myProducts,
   categories,
   productById,
   productByCategoryId,
   productAnalyticsReports,
   productGroups,
   productStatusesById,
   productsByKey,
   searchedProducts,
});
