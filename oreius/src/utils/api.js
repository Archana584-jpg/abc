import axios from "axios";
import { baseURL } from "./config";
import { isString } from "lodash";
import { getState } from "../store/store";

export const api = ({ method, url, body, headers }) => {
  const regex = /{[^\/]*}/g;
  var m;
  if (body && isString(body)) body = JSON.parse(JSON.stringify(body));
  while ((m = url.match(regex)) !== null) {
    var urlParamName = m[0].substring(1, m[0].length - 1);
    url = url.replace(m[0], body[urlParamName]);
    delete body[urlParamName];
  }

  if (method === "GET" && body != null) {
    let keys = [];
    Object.keys(body)
      .filter((item) => body[item])
      .forEach((item) => {
        if (Array.isArray(body[item])) {
          body[item].forEach((element) =>
            keys.push(item + "=" + encodeURIComponent(element))
          );
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
  const { loginData } = getState("auth");
  headers = {
    "X-API-Key": loginData.apiKey,
    "X-Auth-Type": "API-Key",
    ...headers,
  };
  return axios({
    method: method,
    baseURL: baseURL,
    url: url,
    headers,
    data: body,
  });
};
