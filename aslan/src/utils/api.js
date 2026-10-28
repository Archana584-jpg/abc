import axios from "axios";
import { baseURL } from "./config";
import { isString } from "lodash";
import { dispatch, getState } from "../store/store";
import { message } from "antd";
import { refreshToken, LOGOUT_SUCCESS } from "../screens/login/actions";
import { SESSION_HEART_BEAT_ERROR } from "../shared/actions";

const customAxiosInstance = axios.create();

// Paths that should not trigger token refresh on 401 errors
const excludedPaths = ["/users/auth/refresh-token", "/users/auth/login"];

// Add a request interceptor
axios.interceptors.request.use(
   (config) => {
      const { tokens } = getState("auth");
      const { access_token } = tokens.data;
      if (access_token) {
         config.headers["authorization"] = `Bearer ${access_token}`;
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
      if (error?.response?.status === 401) {
         if (error?.response?.data?.path) {
            const { path } = error.response.data;
            if (!excludedPaths.includes(path)) {
               const { tokens } = getState("auth");
               const { refresh_token } = tokens.data;
               if (refresh_token) {
                  dispatch(refreshToken({ refresh_token }));
               } else {
                  message.error("Session expired!");
                  dispatch({ type: LOGOUT_SUCCESS });
               }
            }
         }
         return Promise.reject(error);
      }
      // 409 on refresh-token means another session is active; show concurrent session modal
      else if (error?.response?.status === 409 && error?.response?.data?.path.includes("/users/auth/refresh-token")) {
         dispatch({ type: SESSION_HEART_BEAT_ERROR, conCurrentSessionExists: true });
      }
      return Promise.reject(error);
   }
);

export const api = ({ method, url, body, headers, isNewInstanceRequest, responseType }) => {
   const regex = /{[^\/]*}/g;
   var m;
   if (body && isString(body)) body = JSON.parse(JSON.stringify(body));
   while ((m = url.match(regex)) !== null) {
      var urlParamName = m[0].substring(1, m[0].length - 1);
      url = url.replace(m[0], body[urlParamName]);
      delete body[urlParamName];
   }
   if (headers == null) headers = {};
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
   } else {
      body = body;
   }
   if (isNewInstanceRequest) {
      return customAxiosInstance({
         method: method,
         url: url,
         data: body,
         headers: headers,
      });
   }
   return axios({
      method: method,
      baseURL: baseURL,
      url: url,
      headers: headers,
      data: body,
      responseType: responseType || "json",
   });
};
