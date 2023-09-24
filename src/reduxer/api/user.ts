import $axios from "./config";
import axios from "axios";
import { UserPayloadProps } from "../actions/actionTypes";
// import { store } from "../../App";

const userAPI = {
  async registerUser(payload: UserPayloadProps) {
    return $axios.post("/auth/register", payload);
  },
  async verifyUser(payload: any) {
    return $axios.post(`/auth/verify-email/${payload}`);
  },
  async loginUser(payload: UserPayloadProps) {
    return $axios.post("/auth/login", payload);
  },
  async logoutUser() {
    return $axios.post("/auth/logout");
  },
  async getUserInfo() {
    return $axios.get("/users/user");
  },

  async getDashboard() {
    return $axios.get(
      "/dashboards/get_dashboard/6de26966-0f0b-41f0-8fdb-79772aff1133"
    );
  },
};
export default userAPI;
