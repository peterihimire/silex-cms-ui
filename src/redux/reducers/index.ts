import userReducer from "./UserReducer";
import { combineReducers } from "redux";
import { UserPayloadProps } from "../actions/actionTypes";

const RootReducer = combineReducers({
  user: userReducer,
});

export type RootState = {
  // user: UserPayloadProps;
  // cart: CartState;
  // Add more slice states here if needed
};
export default RootReducer;
