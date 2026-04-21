// import axios from "axios";

// // const apiClient = axios.create({
// //   baseURL: "http://localhost:3001/api",
// // });

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("token");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   },
// );

// export default apiClient;
