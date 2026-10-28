import { call, put, takeLatest } from "redux-saga/effects";
import {
   GENERATE_OTP_WRT_PRODUCT_OFFERING,
   GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR,
   GENERATE_OTP_WRT_PRODUCT_OFFERING_LOADING,
   GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_LOADING,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_SUCCESS,
   GET_CAPTCHA_RESPONSE,
   GET_CAPTCHA_RESPONSE_ERROR,
   GET_CAPTCHA_RESPONSE_LOADING,
   GET_CAPTCHA_RESPONSE_SUCCESS,
   SET_CURRENT_STEP_WRT_OFFERING,
   SAVE_FORM_DATA,
   AUTHENTICATE_USER_WRT_PRODUCT,
   AUTHENTICATE_USER_WRT_PRODUCT_LOADING,
   AUTHENTICATE_USER_WRT_PRODUCT_ERROR,
   AUTHENTICATE_USER_WRT_PRODUCT_SUCCESS,
   GET_DATA_WRT_PRODUCT_OFFERING,
   GET_DATA_WRT_PRODUCT_OFFERING_LOADING,
   GET_DATA_WRT_PRODUCT_OFFERING_SUCCESS,
   GET_DATA_WRT_PRODUCT_OFFERING_ERROR,
   SAVE_RESULT_WRT_PRODUCT_OFFERING,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_LOADING,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_SUCCESS,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR,
} from "screens/sandbox/actions";
import { baseURL } from "utils/config";
import { downloadFile, nestedErrorhandling } from "utils/helper";
import { api } from "utils/api";
import { message } from "antd";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { productsMapping, productsOfferingsMapping, apiResponseCodeWRTOfferings } from "utils/constants";

const { AADHAAR_VERIFICATION } = productsMapping;
const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

function* generateOTPWRTProductOffering({ headers, nextStep, body, service }) {
   const { product, offering, endpoint } = service;
   const apiResponseCodes = apiResponseCodeWRTOfferings[product][offering];
   yield put({ type: GENERATE_OTP_WRT_PRODUCT_OFFERING_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${product}/${endpoint}/generate-otp`,
         body,
         headers,
      });
      if (
         Object.values(apiResponseCodes).indexOf((data || {}).code || "") > -1 &&
         apiResponseCodes.CAPTCHA_REGENERATED_SUCCESS !== ((data || {}).code || "")
      ) {
         yield put({
            type: GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS,
            data,
         });
         yield put({
            type: SAVE_FORM_DATA,
            data: {
               headers: { ...headers, transaction_id: data.transaction_id },
               nextStep,
               service,
               body: { ...body, share_code: data.code },
            },
         });
         yield put({
            type: SET_CURRENT_STEP_WRT_OFFERING,
            step: nextStep,
         });
         if ((data || {}).message) {
            message.success(data.message);
         }
      } else if (apiResponseCodes.CAPTCHA_REGENERATED_SUCCESS === ((data || {}).code || "")) {
         yield put({
            type: GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS,
         });
         yield put({ type: GET_CAPTCHA_RESPONSE_SUCCESS, data: data });
         yield put({
            type: SET_CURRENT_STEP_WRT_OFFERING,
            step: productOfferingFormSteps[AADHAAR_VERIFICATION][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
            ].CAPTCHA_VERIFICATION_FORM,
         });
         yield put({
            type: SAVE_FORM_DATA,
            data: { headers, nextStep, service, body: { ...body, captcha_response: data.captcha_base64 } },
         });
         message.info(data.message);
      } else if ((data || {}).message) {
         message.info(data.message);
         yield put({
            type: GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR,
            errorMessage: "",
         });
      }
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR,
         errorMessage: "",
      });
   }
}

function* submitTransactionalDataForOfferingResult({ body, headers, nextStep, service }) {
   const { product, offering, endpoint } = service;
   const apiResponseCodes = apiResponseCodeWRTOfferings[product][offering];
   yield put({ type: SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${product}/${endpoint}/submit-otp`,
         body,
         headers,
      });
      if (Object.values(apiResponseCodes).indexOf((data || {}).code || "") > -1) {
         yield put({
            type: SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_SUCCESS,
            data: data,
         });
         yield put({
            type: SET_CURRENT_STEP_WRT_OFFERING,
            step: nextStep,
         });
      } else if ((data || {}).message) {
         yield put({
            type: SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR,
            errorMessage: "",
         });
         message.info(data.message);
      }
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR,
         errorMessage: "",
      });
   }
}

function* getCaptchaResponse({ nextStep, headers, service }) {
   const { product, offering, endpoint } = service;
   const apiResponseCodes = apiResponseCodeWRTOfferings[product][offering];
   yield put({ type: GET_CAPTCHA_RESPONSE_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${product}/${endpoint}/init`,
         headers,
      });
      if (apiResponseCodes.CAPTCHA_GENERATED_SUCCESS === (data || {}).code || "") {
         yield put({ type: GET_CAPTCHA_RESPONSE_SUCCESS, data: data });
         yield put({
            type: SAVE_FORM_DATA,
            data: { headers, nextStep, service, body: { captcha_response: data.captcha_base64 } },
         });
         yield put({ type: SET_CURRENT_STEP_WRT_OFFERING, step: nextStep });
      } else if ((data || {}).message) {
         yield put({
            type: GET_CAPTCHA_RESPONSE_ERROR,
            errorMessage: "",
         });
         message.info(data.message);
      }
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: GET_CAPTCHA_RESPONSE_ERROR,
         errorMessage: "",
      });
   }
}

// This is being used to generate the authorization URL and redirect the user to the authentication page of the DigiLocker portal.
function* authenticateUserWRTProduct({ headers, nextStep, service, body }) {
   const { product, endpoint } = service;
   yield put({ type: AUTHENTICATE_USER_WRT_PRODUCT_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${product}/${endpoint}`,
         headers,
         body,
      });
      if ((data || {}).transaction_id && (data || {}).authorization_url) {
         yield put({ type: AUTHENTICATE_USER_WRT_PRODUCT_SUCCESS });
         yield put({
            type: SAVE_FORM_DATA,
            data: {
               headers,
               nextStep,
               service,
               body: { ...body, transaction_id: data.transaction_id, authorization_url: data.authorization_url },
            },
         });
      } else if ((data || {}).message) {
         yield put({
            type: AUTHENTICATE_USER_WRT_PRODUCT_ERROR,
            errorMessage: "",
         });
         message.info(data.message);
      }
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: AUTHENTICATE_USER_WRT_PRODUCT_ERROR,
         errorMessage: "",
      });
   }
}

function* getDataWRTProductOffering({ headers, nextStep, service, body, apiCallMethodType }) {
   const { product, offering, endpoint } = service;
   const apiResponseCodes = apiResponseCodeWRTOfferings[product][offering];
   const initialInput = {};
   //If the body contains a FormData instance, then we collect all the entries in initialInput to display them in the input section.
   if (body instanceof FormData) {
      const formDataEntries = Array.from(body.entries());
      formDataEntries.forEach(([key, value]) => {
         initialInput[key] = value;
      });
   }
   yield put({ type: GET_DATA_WRT_PRODUCT_OFFERING_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: apiCallMethodType,
         url: `${baseURL}/${product}/${endpoint}`,
         headers,
         body,
      });
      if (
         Object.values(apiResponseCodes).indexOf((data || {}).code || "") > -1 &&
         apiResponseCodes.CAPTCHA_REGENERATED_SUCCESS !== ((data || {}).code || "")
      ) {
         yield put({ type: GET_DATA_WRT_PRODUCT_OFFERING_SUCCESS });
         yield put({ type: SAVE_RESULT_WRT_PRODUCT_OFFERING, data: data });
         yield put({
            type: SAVE_FORM_DATA,
            data: {
               headers: { ...headers, transaction_id: data.transaction_id },
               nextStep,
               service,
               //In the last step, the user provided consent, and after redirection, all data gets removed. That's why giving consent here
               body: { ...body, ...initialInput, consent: "Y" },
            },
         });
         yield put({ type: SET_CURRENT_STEP_WRT_OFFERING, step: nextStep });
      } else if (apiResponseCodes.CAPTCHA_REGENERATED_SUCCESS === ((data || {}).code || "")) {
         yield put({ type: SAVE_RESULT_WRT_PRODUCT_OFFERING });
         yield put({ type: GET_CAPTCHA_RESPONSE_SUCCESS, data: data });
         yield put({
            type: SET_CURRENT_STEP_WRT_OFFERING,
            step: productOfferingFormSteps[product][offering].CAPTCHA_VERIFICATION_FORM,
         });
         yield put({
            type: SAVE_FORM_DATA,
            data: { headers, nextStep, service, body: { ...body, captcha_response: data.captcha_base64 } },
         });
         message.info(data.message);
      } else if ((data || {}).message) {
         yield put({
            type: GET_DATA_WRT_PRODUCT_OFFERING_ERROR,
            errorMessage: "",
         });
         message.info(data.message);
      }
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: GET_DATA_WRT_PRODUCT_OFFERING_ERROR,
         errorMessage: "",
      });
   }
}

//This is being used to fetch data of a particular file from the files available on the DigiLocker portal.
function* getUsersIssuedDataWRTProductOffering({ headers, body }) {
   const { format, file_uri, selectedFileName } = body;
   yield put({ type: GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/digilocker/issued-file`,
         headers,
         body: {
            file_uri: file_uri,
            format: format,
         },
      });
      if (((data || {}).issued_file_link || (data || {}).document) && (data || {}).transaction_id) {
         yield put({ type: GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_SUCCESS, data: data });
         yield put({
            type: SAVE_FORM_DATA,
            data: {
               headers: { ...headers, transaction_id: data.transaction_id },
               nextStep: "",
               service: {},
               body,
            },
         });
         if (data.issued_file_link) {
            yield call(downloadFile, data.issued_file_link, selectedFileName);
         }
      } else if ((data || {}).message) {
         yield put({
            type: GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR,
            errorMessage: "",
         });
         message.info(data.message);
      }
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR,
         errorMessage: "",
      });
   }
}

export default function* watchSandboxSaga() {
   yield takeLatest(GENERATE_OTP_WRT_PRODUCT_OFFERING, generateOTPWRTProductOffering);
   yield takeLatest(SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT, submitTransactionalDataForOfferingResult);
   yield takeLatest(GET_CAPTCHA_RESPONSE, getCaptchaResponse);
   yield takeLatest(AUTHENTICATE_USER_WRT_PRODUCT, authenticateUserWRTProduct);
   yield takeLatest(GET_DATA_WRT_PRODUCT_OFFERING, getDataWRTProductOffering);
   yield takeLatest(GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING, getUsersIssuedDataWRTProductOffering);
}
