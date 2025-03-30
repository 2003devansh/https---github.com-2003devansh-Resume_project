import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/posts";

// Async Thunks
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch posts");
  }
});

export const createPost = createAsyncThunk("posts/createPost", async (postData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post(API_URL, postData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to create post");
  }
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({ id, postData }, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.put(`${API_URL}/${id}`, postData, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to update post");
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    await axios.delete(`${API_URL}/${id}`, config);
    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to delete post");
  }
});

// Slice
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
