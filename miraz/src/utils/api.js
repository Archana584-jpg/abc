import axios from "axios";
import { baseURL } from "./config";
import { isString } from "lodash";

const customAxiosInstance = axios.create();

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
         responseType: responseType,
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
