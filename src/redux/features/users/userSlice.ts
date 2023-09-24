import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import userAPI from "../../api/user";

import { UserResponseProps } from "../../../types/UserResponseProps.type";
import { UserPayloadProps } from "../../../types/UserPayloadProps.type";
interface UserData {
  // Define the structure of your user data here
  acct_id: string;
  email: string;
}
const userDataString = localStorage.getItem("silex_user");
const userData: UserData | null = userDataString
  ? JSON.parse(userDataString)
  : null;

// import Post from "../../models/postModel";

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

export const loginUser = createAsyncThunk(
  "users/login",
  async (payload: UserPayloadProps, thunkApi) => {
    try {
      const response = await userAPI.loginUser(payload);
      const data = response.data;
      localStorage.setItem("silex_user", JSON.stringify(data.data));
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getDashboard = createAsyncThunk(
  "users/dashboard",
  async (data, thunkApi) => {
    try {
      const response = await userAPI.getDashboard();
      const data = response.data;
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "users/login",
  async (payload, thunkApi) => {
    try {
      const response = await userAPI.logoutUser();
      const data = response.data;
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    } finally {
      localStorage.removeItem("silex_user");
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<UserResponseProps>(
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
  data: UserResponseProps | null;
  dashboard: any | null;
  authenticated: boolean;
  userData: UserData;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  dashboard: null,
  authenticated: !!userData,
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
      })

      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.authenticated = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getDashboard.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        // state.authenticated = true;
      })
      .addCase(getDashboard.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
