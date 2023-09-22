import $axios from "./config";
import axios from "axios";
import { UserPayloadProps } from "../actions/actionTypes";
// import { store } from "../../App";

const userAPI = {
  async registerUser(payload:UserPayloadProps) {
    return $axios.post("/auth/register", payload);
  },
  async verifyUser(payload:any) {
    return $axios.post(`/auth/verify-email/${payload}`);
  },
  async loginUser(payload:any) {
    return $axios.post("/auth/login", payload);
  },
  async logoutUser(payload:any) {
    return $axios.post("/auth/logout", payload);
  },
  async getUserInfo() {
    return $axios.get("/users/user");
  },
};
export default userAPI;
