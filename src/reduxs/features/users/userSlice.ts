import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import userAPI from "../../../redux/api/user";
// import Post from "../../models/postModel";
import {
  UserResponseData,
  UserPayloadProps,
} from "../../../redux/actions/actionTypes";

export const registerUser = createAsyncThunk(
  "users/register",
  async (payload: UserPayloadProps, thunkApi) => {
    try {
      const response = await userAPI.registerUser(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<UserResponseData>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface UserState {
  loading: boolean;
  error: string | null;
  data: UserResponseData | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
