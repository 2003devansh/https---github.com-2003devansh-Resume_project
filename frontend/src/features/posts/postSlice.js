import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '../../api/post';

// getPosts thunk
const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
    try {
        const { data } = await postAPI.fetchPosts();
        return data; // this is payload
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// createPost thunk
const createPost = createAsyncThunk('posts/createPost', async (newPost, thunkAPI) => {
    try {
        const { data } = await postAPI.createPost(newPost);
        return data; 
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// updatePost thunk
const updatePost = createAsyncThunk('posts/updatePost', async ({ id, updatedPost }, thunkAPI) => {
    try {
        const { data } = await postAPI.updatePost(id, updatedPost);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// deletePost thunk
const deletePost = createAsyncThunk('posts/deletePost', async (id, thunkAPI) => {
    try {
        await postAPI.deletePost(id);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// The Slice
const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getPosts
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })

            // createPost
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })

            // updatePost
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = state.posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                );
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })

            // deletePost
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = state.posts.filter((post) => post._id !== action.payload);
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

// Export everything here 👇
export default postSlice.reducer;
export { getPosts, createPost, updatePost, deletePost };
