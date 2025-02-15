import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Modify the request config here if needed
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Modify the response data here if needed
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  }
);

export default api;
