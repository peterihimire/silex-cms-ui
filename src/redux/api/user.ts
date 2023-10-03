import $axios from "./config";
import { UserPayloadProps } from "../../types/UserPayloadProps.type";

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

  async getDashboard(payload: string) {
    return $axios.get(`/dashboards/get_dashboard/:${payload} `);
  },
};
export default userAPI;
