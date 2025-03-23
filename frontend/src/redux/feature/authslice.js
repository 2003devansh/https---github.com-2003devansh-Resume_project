import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import * as authAPI from '../../api/auth' ;


const login = createAsyncThunk()