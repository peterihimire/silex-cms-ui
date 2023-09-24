import axios from "axios";

const baseURL = "https://silex-cms-task.onrender.com/api/silex_task/v1";
// const baseURL = "http://127.0.0.1:80/api/silex_task/v1";

const config = {
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
    "Access-Control-Allow-Origin": "*",
    withCredentials: true,
    Authorization: "Bearer ",
  },
};

let $axios = axios.create({
  ...config,
  baseURL,
});

export default $axios;
