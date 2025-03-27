import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("http://localhost:5000/posts");
  return data;
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const { data } = await axios.post("http://localhost:5000/posts", post);
  return data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postSlice.reducer;
