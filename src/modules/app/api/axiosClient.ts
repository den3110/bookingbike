// TODO Api Example
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.minhkhanggroup.vn",
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosClient.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
