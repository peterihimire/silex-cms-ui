import axios from "axios";

const baseURL = "https://silex-cms-task.onrender.com/api/silex_task/v1";
// const baseURL = "http://127.0.0.1:80/api/silex_task/v1";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    withCredentials: true,
  },
};

let $axios = axios.create({
  // ...config,
  baseURL,
  headers: config.headers,
});

export default $axios;
