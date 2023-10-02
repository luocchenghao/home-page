import axios from "axios";

const myInstance = axios.create({
  baseURL: "https://glz.ihp.zkml.cn",
  timeout: 10000,
});

myInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

myInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default myInstance;
