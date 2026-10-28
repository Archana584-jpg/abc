import axios from "axios";
import { isString } from "lodash";
import { baseURL } from "./config";
import { store } from "store/configureStore";
import { logoutSuccess } from "screens/login/actions";
import { refreshToken } from "shared/actions";

// Add a request interceptor
axios.interceptors.request.use(
   (config) => {
      const { getState } = store;
      const { tokens, currentUser } = getState().shared;

      if (tokens?.data?.access_token) {
         config.headers["authorization"] = `Bearer ${tokens?.data?.access_token}`;
      }

      if (currentUser?.data?.id) {
         config.headers["User-ID"] = currentUser?.data?.id;
      }
      return config;
   },
   (error) => {
      Promise.reject(error);
   }
);

//Add a response interceptor
axios.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      const { dispatch, getState } = store;
      if (error?.response?.status === 401) {
         if (!error?.config?.url?.includes("refresh-token")) {
            const { tokens } = getState().shared;
            if (tokens?.data?.refresh_token) {
               dispatch(refreshToken({ refresh_token: tokens?.data?.refresh_token }));
            } else {
               dispatch(logoutSuccess());
            }
         } else {
            dispatch(logoutSuccess());
         }
         return Promise.reject(error);
      }
      return Promise.reject(error);
   }
);

export const api = ({ method, url, body, headers, params, responseType }) => {
   const regex = /{[^\/]*}/g;
   let m;
   if (body && isString(body)) body = JSON.parse(JSON.stringify(body));
   while ((m = url.match(regex)) !== null) {
      let urlParamName = m[0].substring(1, m[0].length - 1);
      url = url.replace(m[0], body[urlParamName]);
      delete body[urlParamName];
   }
   if (headers == null) headers = {};
   headers["X-Source"] = "ADMIN_PORTAL";
   if (method === "GET" && body != null) {
      let keys = [];
      Object.keys(body)
         .filter((item) => body[item])
         .forEach((item) => {
            if (Array.isArray(body[item])) {
               body[item].forEach((element) => keys.push(item + "=" + encodeURIComponent(element)));
            } else if (body[item] instanceof Date) {
               keys.push(item + "=" + encodeURIComponent(body[item].toISOString()));
            } else {
               keys.push(item + "=" + encodeURIComponent(body[item]));
            }
         });
      if (Object.keys(body).length !== 0) {
         url += "?" + keys.join("&");
      }
   }
   return axios({
      method: method,
      baseURL: baseURL,
      url: url,
      headers: headers,
      data: body,
      params: params,
      responseType: responseType || "json",
   });
};
