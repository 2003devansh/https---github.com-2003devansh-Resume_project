import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login Action
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/auth/login", credentials, { withCredentials: true });
      localStorage.setItem("profile", JSON.stringify(data)); // Save user info
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Signup Action
export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/auth/signup", credentials, { withCredentials: true });
      localStorage.setItem("profile", JSON.stringify(data)); // Save user info
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
  }
);

// Logout Action
export const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  try {
    await axios.get("http://localhost:5000/auth/logout", { withCredentials: true });
    localStorage.removeItem("profile");
    dispatch(clearUser()); // Clear Redux state
  } catch (error) {
    console.error("Logout failed:", error);
  }
});

const initialState = {
  user: JSON.parse(localStorage.getItem("profile")) || null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Handle signup
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Handle logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
      });
  },
});

export const { clearUser, setUser } = authSlice.actions;
export default authSlice.reducer;
