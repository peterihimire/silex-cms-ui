import * as actionTypes from "../actions/actionTypes";
import {
  UserResponseData,
  USER_REGISTER_START,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_ERROR,
  UserDispatchTypes,
} from "../actions/actionTypes";

interface UserData {
  // Define the structure of your user data here
  acct_id: string;
  email: string;
}

const userDataString = localStorage.getItem("silex_user");
const userData: UserData | null = userDataString
  ? JSON.parse(userDataString)
  : null;

interface DefaultStateI {
  loading: boolean;
  userData?: UserResponseData;
  // error: string | null,
  // response: {}
}

const defaultState: DefaultStateI = {
  // authenticated: !!userData,
  // userData: userData,
  loading: false,
  // error: null,
  // response: {},
};
const UserReducer = (
  state: DefaultStateI = defaultState,
  action: UserDispatchTypes
) => {
  switch (action.type) {
    case USER_REGISTER_START:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case USER_REGISTER_RESPONSE:
      return {
        ...state,
        authenticated: true, // Assuming you want to set authenticated to true on response
        userData: action.payload,
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
