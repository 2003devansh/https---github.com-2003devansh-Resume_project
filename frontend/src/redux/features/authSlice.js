import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login Action
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await axios.post("http://localhost:5000/auth/login", credentials);
  return data;
});

// Signup Action
export const signUp = createAsyncThunk("auth/signUp", async (credentials) => {
  const { data } = await axios.post("http://localhost:5000/auth/signup", credentials);
  return data;
});

// Logout Action (Clears the user state)
export const logout = () => (dispatch) => {
  dispatch(authSlice.actions.clearUser());
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { clearUser } = authSlice.actions; // Exporting action

export default authSlice.reducer;
