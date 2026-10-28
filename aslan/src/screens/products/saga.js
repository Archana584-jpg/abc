import { call, put, takeLatest } from "redux-saga/effects";
import {
   GET_CATEGORIES,
   GET_CATEGORIES_LOADING,
   GET_CATEGORIES_SUCCESS,
   GET_CATEGORIES_ERROR,
   GET_PRODUCTS,
   GET_PRODUCTS_LOADING,
   GET_PRODUCTS_SUCCESS,
   GET_PRODUCTS_ERROR,
   GET_MY_PRODUCTS,
   GET_MY_PRODUCTS_LOADING,
   GET_MY_PRODUCTS_SUCCESS,
   GET_MY_PRODUCTS_ERROR,
   GET_PRODUCT_ANALYTICS_REPORTS,
   GET_PRODUCT_ANALYTICS_REPORTS_LOADING,
   GET_PRODUCT_ANALYTICS_REPORTS_SUCCESS,
   GET_PRODUCT_ANALYTICS_REPORTS_ERROR,
   GET_ALL_PRODUCT_GROUPS,
   GET_ALL_PRODUCT_GROUPS_ERROR,
   GET_ALL_PRODUCT_GROUPS_LOADING,
   GET_ALL_PRODUCT_GROUPS_SUCCESS,
   GET_ALL_PRODUCT_STATUSES,
   GET_ALL_PRODUCT_STATUSES_ERROR,
   GET_ALL_PRODUCT_STATUSES_LOADING,
   GET_ALL_PRODUCT_STATUSES_SUCCESS,
   GET_SEARCHED_PRODUCTS,
   GET_SEARCHED_PRODUCTS_LOADING,
   GET_SEARCHED_PRODUCTS_SUCCESS,
   GET_SEARCHED_PRODUCTS_ERROR,
} from "screens/products/actions";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { errorhandling, nestedErrorhandling } from "utils/helper";
import { apiCallMethodTypes } from "utils/constants";

function* getCategories({ body }) {
   yield put({ type: GET_CATEGORIES_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/product-categories`,
         body,
      });
      yield put({ type: GET_CATEGORIES_SUCCESS, data: data.entities });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_CATEGORIES_ERROR, errorMessage: "" });
   }
}

function* getProducts({ body }) {
   yield put({ type: GET_PRODUCTS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/products`,
         body,
      });
      yield put({ type: GET_PRODUCTS_SUCCESS, data: data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_PRODUCTS_ERROR, errorMessage: "" });
   }
}

function* getMyProducts({ body }) {
   yield put({ type: GET_MY_PRODUCTS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/my-products`,
         body,
      });
      yield put({ type: GET_MY_PRODUCTS_SUCCESS, data: data.entities });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_MY_PRODUCTS_ERROR, errorMessage: "" });
   }
}

function* getProductAnalyticsReports({ body, endpoint }) {
   yield put({ type: GET_PRODUCT_ANALYTICS_REPORTS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: apiCallMethodTypes.POST,
         url: `${baseURL}/${portal}/${endpoint}`,
         body,
      });
      yield put({ type: GET_PRODUCT_ANALYTICS_REPORTS_SUCCESS, data });
   } catch (error) {
      nestedErrorhandling(error);
      yield put({ type: GET_PRODUCT_ANALYTICS_REPORTS_ERROR, errorMessage: "" });
   }
}

function* getAllProductGroups({ body }) {
   yield put({ type: GET_ALL_PRODUCT_GROUPS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: apiCallMethodTypes.POST,
         url: `${baseURL}/${portal}/product-groups`,
         body,
      });
      yield put({ type: GET_ALL_PRODUCT_GROUPS_SUCCESS, data });
   } catch (error) {
      nestedErrorhandling(error);
      yield put({ type: GET_ALL_PRODUCT_GROUPS_ERROR, errorMessage: "" });
   }
}

function* getAllProductStatuses({ body }) {
   yield put({ type: GET_ALL_PRODUCT_STATUSES_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: apiCallMethodTypes.POST,
         url: `${baseURL}/${portal}/product-statuses`,
         body,
      });
      yield put({ type: GET_ALL_PRODUCT_STATUSES_SUCCESS, data });
   } catch (error) {
      nestedErrorhandling(error);
      yield put({ type: GET_ALL_PRODUCT_STATUSES_ERROR, errorMessage: "" });
   }
}

function* getSearchedProducts({ body }) {
   yield put({ type: GET_SEARCHED_PRODUCTS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/products`,
         body,
      });
      yield put({ type: GET_SEARCHED_PRODUCTS_SUCCESS, data: data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_SEARCHED_PRODUCTS_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchProductsSaga() {
   yield takeLatest(GET_CATEGORIES, getCategories);
   yield takeLatest(GET_PRODUCTS, getProducts);
   yield takeLatest(GET_MY_PRODUCTS, getMyProducts);
   yield takeLatest(GET_PRODUCT_ANALYTICS_REPORTS, getProductAnalyticsReports);
   yield takeLatest(GET_ALL_PRODUCT_GROUPS, getAllProductGroups);
   yield takeLatest(GET_ALL_PRODUCT_STATUSES, getAllProductStatuses);
   yield takeLatest(GET_SEARCHED_PRODUCTS, getSearchedProducts);
}
