import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/posts";

// Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch posts");
  }
});

// Create a new post
export const createPost = createAsyncThunk("posts/createPost", async (postData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(API_URL, postData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Send JWT token if needed
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to create post");
  }
});

// Update a post
export const updatePost = createAsyncThunk("posts/updatePost", async ({ id, updatedPost }, { rejectWithValue }) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, updatedPost, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to update post");
  }
});

// Delete a post
export const deletePost = createAsyncThunk("posts/deletePost", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return id; // Return the deleted post ID
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to delete post");
  }
});

// Like a post
export const likePost = createAsyncThunk("posts/likePost", async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}/like`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to like post");
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {}, // No reducers since all operations use asyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })

      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })

      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      });
  },
});

export default postSlice.reducer;
