import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../api/auth';

// login thunk
const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        const { data } = await authAPI.signIn(formData);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// signUp thunk
const signUp = createAsyncThunk('auth/signup', async (formData, thunkAPI) => {
    try {
        const { data } = await authAPI.signUp(formData);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('profile');
        },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.result;
                state.token = action.payload.token;
                localStorage.setItem('profile', JSON.stringify({ user: action.payload.result, token: action.payload.token }));
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })

            // signUp
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.result;
                state.token = action.payload.token;
                localStorage.setItem('profile', JSON.stringify({ user: action.payload.result, token: action.payload.token }));
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export { login, signUp };
export const { logout } = authSlice.actions;
export default authSlice.reducer;
