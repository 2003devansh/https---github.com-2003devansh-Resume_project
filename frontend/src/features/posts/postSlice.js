import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '../../api/post';

// getPosts thunk
const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
    try {
        const { data } = await postAPI.fetchPosts();
        return data;
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


const PostSlice  = createSlice({
    name:"posts",
    intialState:{
        posts:[] ,
        isLoading: false , 
        error: null , 
    },

    reducers: {} ,
    extraReducers: (builder) =>{
        builder. // getPosts
        addCase(getPosts.pending,(state)=>{
            state.isLoading = true ;
            state.error = null ;
        })
        .addCase(getPosts.fullfilled , (state)=>{
            state.isLoading = false ; 
            state.posts = action.payload ;
        })
        .addCase(getPosts.reject,(state)=>{
            state.isLoading = true  ; 
            state.error =  action.payload.error ; 
        })

        // updatePost 
        .addCase(updatePost.pending, (state)=>{
            state.isLoading = true ; 
            state.error = null ; 
        })
    }
})
