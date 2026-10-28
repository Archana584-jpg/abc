export const GET_FSSAI_LICENSE_DATA = "GET_FSSAI_LICENSE_DATA";
export const GET_FSSAI_LICENSE_DATA_LOADING = "GET_FSSAI_LICENSE_DATA_LOADING";
export const GET_FSSAI_LICENSE_DATA_SUCCESS = "GET_FSSAI_LICENSE_DATA_SUCCESS";
export const GET_FSSAI_LICENSE_DATA_ERROR = "GET_FSSAI_LICENSE_DATA_ERROR";
export const CLEAR_FSSAI_LICENSE_DATA = "CLEAR_FSSAI_LICENSE_DATA";

export const getFssaiLicenseData = (body) => ({
  type: GET_FSSAI_LICENSE_DATA,
  body,
});

export const clearFssaiLicenseData = () => ({
  type: CLEAR_FSSAI_LICENSE_DATA,
  data: {},
});
