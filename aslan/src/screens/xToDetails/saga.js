import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
   X_TO_DETAILS_FETCH_ADDRESS_LOOKUP_BY_MOBILE,
   X_TO_DETAILS_FETCH_UAN_BY_MOBILE,
   X_TO_DETAILS_FETCH_GSTIN_BY_MOBILE,
   X_TO_DETAILS_FETCH_INDIVIDUAL_PERSONAL_PROFILE,
   X_TO_DETAILS_FETCH_UPI_ID_MOBILE,
   X_TO_DETAILS_FETCH_MOBILE_NUMBER_AGE,
   X_TO_DETAILS_FECTH_PASSBOOK_WITHOUT_OTP_BY_UAN,
   X_TO_DETAILS_API_RESPONSE_SUCCESS,
   X_TO_DETAILS_FETCH_EMPLOYMENT_HISTORY_BY_UAN,
   X_TO_DETAILS_GSTIN_TURNOVER_DETAILS,
   X_TO_DETAILS_FETCH_GSTIN_DETAILED,
   X_TO_DETAILS_FETCH_GSTIN_CONTACT_DETAILS,
   X_TO_DETAILS_VERIFY_UDYAM_ADVANCED,
   X_TO_DETAILS_FETCH_PAN_DETAILED,
   X_TO_DETAILS_FETCH_FATHER_NAME_BY_PAN,
   X_TO_DETAILS_FETCH_CIN_BY_PAN,
   X_TO_DETAILS_FETCH_COMPANY,
   X_TO_DETAILS_UDYAM_LOOKUP,
   X_TO_DETAILS_FETCH_GSTIN_BY_PAN,
   X_TO_DETAILS_FETCH_CONTACT_DETAILS_BY_DIN,
   X_TO_DETAILS_FETCH_UAN_BY_PAN,
   X_TO_DETAILS_API_RESPONSE_LOADING,
   X_TO_DETAILS_API_RESPONSE_ERROR,
   X_TO_DETAILS_VERIFY_EMPLOYER,
   X_TO_DETAILS_FETCH_EPFO_PROFILE_DETAILS,
   X_TO_DETAILS_FETCH_DIGITAL_FOOTPRINT,
   X_TO_DETAILS_FETCH_LPG_DETAILS_BY_MOBILE,
   X_TO_DETAILS_FETCH_RC_LOOKUP_BY_MOBILE,
   X_TO_DETAILS_FETCH_RC_DETAILED,
} from "./actionTypes";
import { api } from "utils/api";
import { baseURL } from "utils/config";
import { APINameMapping, rateLimitErrorMessage } from "./constants";

const getErrorMessage = (error) => {
   if (error?.response?.status === 429) {
      return rateLimitErrorMessage;
   }
   return "";
};

function* fetchAddressLookupByMobile({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.ADDRESS_LOOKUP_BY_MOBILE,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/profile-api/mobile/address-lookup`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: {
            apiName: APINameMapping.ADDRESS_LOOKUP_BY_MOBILE,
            data: data,
            loading: false,
            error: "",
         },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.ADDRESS_LOOKUP_BY_MOBILE,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchUAN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.FETCH_UAN,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/epfo-api/fetch-uan`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: {
            apiName: APINameMapping.FETCH_UAN,
            data: data,
            loading: false,
            error: "",
         },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.FETCH_UAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchGSTINByMobile({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.GSTIN_BY_MOBILE,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/gstin-api/fetch-by-mobile`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: {
            apiName: APINameMapping.GSTIN_BY_MOBILE,
            data: data,
            loading: false,
            error: "",
         },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.GSTIN_BY_MOBILE,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchIndividualPersonalProfile({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.MOBILE_PREFILL,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/profile-api/mobile/prefill`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: {
            apiName: APINameMapping.MOBILE_PREFILL,
            data: data,
            loading: false,
            error: "",
         },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.MOBILE_PREFILL,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchUPIIdMobile({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.UPI_ID_MOBILE,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/bank-api/fetch-upi-id`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: {
            apiName: APINameMapping.UPI_ID_MOBILE,
            data: data,
            loading: false,
            error: "",
         },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.UPI_ID_MOBILE,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchMobileNumberAge({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.MOBILE_NUMBER_AGE,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/profile-api/mobile/number-age`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: {
            apiName: APINameMapping.MOBILE_NUMBER_AGE,
            data: data,
            loading: false,
            error: "",
         },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.MOBILE_NUMBER_AGE,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchEmploymentHistoryByUAN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.EMPLOYMENT_HISTORY_BY_UAN,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/epfo-api/employment-history/fetch-by-uan`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.EMPLOYMENT_HISTORY_BY_UAN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.EMPLOYMENT_HISTORY_BY_UAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchPassbookWithoutOTPByUAN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/epfo-api/passbook/fetch-without-otp`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//13
function* fetchGstinTurnoverDetails({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.GSTIN_TURNOVER_DETAILS,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/gstin-api/fetch-turnover-details`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.GSTIN_TURNOVER_DETAILS, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.GSTIN_TURNOVER_DETAILS,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//14
function* fetchGSTINDetailed({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.GSTIN_DETAILED,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/gstin-api/fetch-detailed`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.GSTIN_DETAILED, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.GSTIN_DETAILED,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//16
function* fetchGstinContactDetails({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.GSTIN_CONTACT_DETAILS,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/gstin-api/fetch-contact-details`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.GSTIN_CONTACT_DETAILS, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.GSTIN_CONTACT_DETAILS,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//17
function* verifyUdyamAdvanced({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.VERIFY_UDYAM_ADVANCED,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/msme-api/udyam-advanced`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.VERIFY_UDYAM_ADVANCED, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.VERIFY_UDYAM_ADVANCED,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//18
function* fetchPANDetailed({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.PAN_DETAILED,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/pan-api/fetch-detailed`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.PAN_DETAILED, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.PAN_DETAILED,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//19
function* fetchFatherNameByPan({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.FATHER_NAME_BY_PAN,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/pan-api/fetch-father-name`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.FATHER_NAME_BY_PAN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.FATHER_NAME_BY_PAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//21
function* fetchCompany({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.FETCH_COMPANY,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/mca-api/fetch-company`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.FETCH_COMPANY, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.FETCH_COMPANY,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

//22
function* fetchCINByPAN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.CIN_BY_PAN,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/mca-api/cin-by-pan`,
         body,
         headers,
      });

      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.CIN_BY_PAN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.CIN_BY_PAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchUdyamLookup({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.UDYAM_LOOKUP,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/msme-api/udyam/lookup`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.UDYAM_LOOKUP, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.UDYAM_LOOKUP,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchGSTINByPAN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.GSTIN_BY_PAN,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/gstin-api/fetch-by-pan`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.GSTIN_BY_PAN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.GSTIN_BY_PAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchContactDetailsByDIN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.CONTACT_DETAILS_BY_DIN,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/mca-api/fetch-contact-details-by-din`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.CONTACT_DETAILS_BY_DIN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.CONTACT_DETAILS_BY_DIN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchUANByPAN({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.UAN_BY_PAN,
         data: null,
         loading: true,
         error: "",
      },
   });

   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/epfo-api/uan/fetch-by-pan`,
         body,
         headers,
      });

      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.UAN_BY_PAN, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.UAN_BY_PAN,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* verifyEmployer({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.VERIFY_EMPLOYER,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/epfo-api/employer-verify`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.VERIFY_EMPLOYER, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.VERIFY_EMPLOYER,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchEpfoProfileDetails({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.EPFO_PROFILE_DETAILS,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/epfo-api/profile-details`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.EPFO_PROFILE_DETAILS, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.EPFO_PROFILE_DETAILS,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchDigitalFootprint({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.DIGITAL_FOOTPRINT,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/profile-api/mobile/digital-footprint`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.DIGITAL_FOOTPRINT, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.DIGITAL_FOOTPRINT,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchLPGDetailsByMobile({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.LPG_DETAILS_BY_MOBILE,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/profile-api/utility/lpg-lookup`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.LPG_DETAILS_BY_MOBILE, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.LPG_DETAILS_BY_MOBILE,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchRCLookupByMobile({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.RC_LOOKUP_BY_MOBILE,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/rc-api/lookup-by-mobile`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.RC_LOOKUP_BY_MOBILE, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.RC_LOOKUP_BY_MOBILE,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

function* fetchRCDetailed({ body, headers }) {
   yield put({
      type: X_TO_DETAILS_API_RESPONSE_LOADING,
      payload: {
         apiName: APINameMapping.RC_DETAILED,
         data: null,
         loading: true,
         error: "",
      },
   });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/rc-api/fetch-detailed`,
         body,
         headers,
      });
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
         payload: { apiName: APINameMapping.RC_DETAILED, data: data, loading: false, error: "" },
      });
   } catch (error) {
      yield put({
         type: X_TO_DETAILS_API_RESPONSE_ERROR,
         payload: {
            apiName: APINameMapping.RC_DETAILED,
            data: null,
            loading: false,
            error: getErrorMessage(error),
         },
      });
   }
}

export default function* watchXToDetailsSaga() {
   yield takeLatest(X_TO_DETAILS_FETCH_ADDRESS_LOOKUP_BY_MOBILE, fetchAddressLookupByMobile);
   yield takeLatest(X_TO_DETAILS_FETCH_UAN_BY_MOBILE, fetchUAN);
   yield takeLatest(X_TO_DETAILS_FETCH_GSTIN_BY_MOBILE, fetchGSTINByMobile);
   yield takeLatest(X_TO_DETAILS_FETCH_INDIVIDUAL_PERSONAL_PROFILE, fetchIndividualPersonalProfile);
   yield takeLatest(X_TO_DETAILS_FETCH_UPI_ID_MOBILE, fetchUPIIdMobile);
   yield takeLatest(X_TO_DETAILS_FETCH_MOBILE_NUMBER_AGE, fetchMobileNumberAge);
   yield takeEvery(X_TO_DETAILS_FETCH_EMPLOYMENT_HISTORY_BY_UAN, fetchEmploymentHistoryByUAN);
   yield takeEvery(X_TO_DETAILS_FECTH_PASSBOOK_WITHOUT_OTP_BY_UAN, fetchPassbookWithoutOTPByUAN);
   yield takeLatest(X_TO_DETAILS_GSTIN_TURNOVER_DETAILS, fetchGstinTurnoverDetails);
   yield takeEvery(X_TO_DETAILS_FETCH_GSTIN_DETAILED, fetchGSTINDetailed);
   yield takeLatest(X_TO_DETAILS_FETCH_GSTIN_CONTACT_DETAILS, fetchGstinContactDetails);
   yield takeEvery(X_TO_DETAILS_VERIFY_UDYAM_ADVANCED, verifyUdyamAdvanced);
   yield takeLatest(X_TO_DETAILS_FETCH_PAN_DETAILED, fetchPANDetailed);
   yield takeLatest(X_TO_DETAILS_FETCH_FATHER_NAME_BY_PAN, fetchFatherNameByPan);
   yield takeEvery(X_TO_DETAILS_FETCH_COMPANY, fetchCompany);
   yield takeLatest(X_TO_DETAILS_FETCH_CIN_BY_PAN, fetchCINByPAN);
   yield takeLatest(X_TO_DETAILS_UDYAM_LOOKUP, fetchUdyamLookup);
   yield takeLatest(X_TO_DETAILS_FETCH_GSTIN_BY_PAN, fetchGSTINByPAN);
   yield takeEvery(X_TO_DETAILS_FETCH_CONTACT_DETAILS_BY_DIN, fetchContactDetailsByDIN);
   yield takeLatest(X_TO_DETAILS_FETCH_UAN_BY_PAN, fetchUANByPAN);
   yield takeEvery(X_TO_DETAILS_VERIFY_EMPLOYER, verifyEmployer);
   yield takeEvery(X_TO_DETAILS_FETCH_EPFO_PROFILE_DETAILS, fetchEpfoProfileDetails);
   yield takeLatest(X_TO_DETAILS_FETCH_DIGITAL_FOOTPRINT, fetchDigitalFootprint);
   yield takeLatest(X_TO_DETAILS_FETCH_LPG_DETAILS_BY_MOBILE, fetchLPGDetailsByMobile);
   yield takeLatest(X_TO_DETAILS_FETCH_RC_LOOKUP_BY_MOBILE, fetchRCLookupByMobile);
   yield takeLatest(X_TO_DETAILS_FETCH_RC_DETAILED, fetchRCDetailed);
}
