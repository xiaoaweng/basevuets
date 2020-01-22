import axios from "axios";
import { isProduction } from "@/until/tools";

const production = isProduction();

const baseURL = production ? "" : "";

const request = axios.create({
  baseURL,
  timeout: 30000
});

/**
 * 添加请求拦截器
 *  */
request.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    // 对请求错误做些什么

    return Promise.reject(error);
  }
);

export default request;
