import * as actionTypes from "./actionTypes";
import { Dispatch } from "react";
import {
  UserDispatchTypes,
  USER_REGISTER_START,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_ERROR,
  RegisterStart,
  UserPayloadProps,
  UserRegisterPayload,
} from "./actionTypes";

import userAPI from "../api/user";

// export const loginStart = (payload) => {
//   return {
//     type: actionTypes.USER_LOGIN_START,
//     payload,
//   };
// };

// export const loginError = (payload) => {
//   return {
//     type: actionTypes.USER_LOGIN_ERROR,
//     payload,
//   };
// };

// export const loginResponse = (payload) => {
//   return {
//     type: actionTypes.USER_LOGIN_RESPONSE,
//     payload,
//   };
// };

// export const logoutResponse = () => {
//   return {
//     type: actionTypes.USER_LOGOUT_RESPONSE,
//   };
// };

// login

export const register = (payload: UserPayloadProps) => {
  return async (dispatch: Dispatch<UserDispatchTypes>) => {
    // dispatch(loginStart(true));
    dispatch({
      type: USER_REGISTER_START,
      payload: { loading: true },
    });

    try {
      const response = await userAPI.registerUser(payload);
      console.log(response);
      // console.log(response.data.accessToken);
      const { data } = response.data;
      localStorage.setItem("silex_user", JSON.stringify(data));
      await dispatch({
        type: USER_REGISTER_RESPONSE,
        payload: data,
      });
      return Promise.resolve(data);
    } catch (err: any) {
      console.log(err);
      dispatch({
        type: USER_REGISTER_ERROR,
        payload: {
          status: err.status,
          msg: err.msg,
        },
        // loginError(err.response)
      });
      return Promise.reject(err);
    } finally {
      // dispatch(loginStart(false));
    }
  };
};

// export const login = (payload: UserPayloadProps) => {
//   return async (dispatch: Dispatch<UserDispatchTypes>) => {
//     // dispatch(loginStart(true));
//     dispatch({
//       type: USER_REGISTER_START,
//     });

//     try {
//       const response = await userAPI.loginUser(payload);
//       console.log(response);
//       // console.log(response.data.accessToken);
//       const { data } = response.data;
//       // localStorage.setItem("haladigital_user", JSON.stringify(data));
//       await dispatch({
//         type: USER_REGISTER_RESPONSE,
//         payload: data,
//       });
//       return Promise.resolve(data);
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: USER_REGISTER_ERROR,
//         // loginError(err.response)
//       });
//       return Promise.reject(err);
//     } finally {
//       // dispatch(loginStart(false));
//     }
//   };
// };

// export const logout = () => {
//   return async (dispatch) => {
//     try {
//       const res = await userAPI.logoutUser();
//       return Promise.resolve(res.message);
//     } catch (error) {
//       return Promise.reject(error);
//     } finally {
//       localStorage.removeItem("haladigital_user");
//       await dispatch(logoutResponse());
//     }
//   };
// };
