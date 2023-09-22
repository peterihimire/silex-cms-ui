export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RESTORE_USER = "RESTORE_USER";
export const SET_DARK = "SET_DARK";

export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_RESPONSE = "USER_REGISTER_RESPONSE";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";

export type UserResponse = {
  status: string;
  msg: string;
  data: {
    acct_id: string;
    email: string;
  };
};

export type UserPayloadProps = {
  email: string;
  password: string;
};

export type UserEmail = {
  email: string;
};
export type UserPassword = {
  password: string;
};
export type UserRegisterPayload = {
  loading: boolean;
};
export type UserResponseStatus = {
  status: string;
};
export type UserResponseMessage = {
  msg: string;
};
export type UserResponseData = {
  acct_id: string;
  email: string;
};

export interface RegisterStart {
  type: typeof USER_REGISTER_START;
  payload: UserRegisterPayload;
}
export interface RegisterResponse {
  type: typeof USER_REGISTER_RESPONSE;
  payload: {
    status: UserResponseStatus;
    msg: UserResponseMessage;
    data: UserResponseData;
  };
}
export interface RegisterError {
  type: typeof USER_REGISTER_ERROR;
  payload: {
    status: UserResponseStatus;
    msg: UserResponseMessage;
    // data: UserResponseData;
  };
}

export type UserDispatchTypes =
  | RegisterStart
  | RegisterResponse
  | RegisterError;

export const USER_INFO_START = "USER_INFO_START";
export const USER_INFO_RESPONSE = "USER_INFO_RESPONSE";
export const USER_INFO_ERROR = "USER_INFO_ERROR";

export const USER_VERIFY_START = "USER_VERIFY_START";
export const USER_VERIFY_RESPONSE = "USER_VERIFY_RESPONSE";
export const USER_VERIFY_ERROR = "USER_VERIFY_ERROR";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_RESPONSE = "USER_LOGIN_RESPONSE";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

export const USER_LOGOUT_START = "USER_LOGOUT_START";
export const USER_LOGOUT_RESPONSE = "USER_LOGOUT_RESPONSE";
export const USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR";

export const ADMIN_LOGIN_START = "ADMIN_LOGIN_START";
export const ADMIN_LOGIN_RESPONSE = "ADMIN_LOGIN_RESPONSE";
export const ADMIN_LOGIN_ERROR = "ADMIN_LOGIN_ERROR";

export const ADMIN_LOGOUT_START = "ADMIN_LOGOUT_START";
export const ADMIN_LOGOUT_RESPONSE = "ADMIN_LOGOUT_RESPONSE";
export const ADMIN_LOGOUT_ERROR = "ADMIN_LOGOUT_ERROR";
