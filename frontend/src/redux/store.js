import {configureStore} from '@reduxjs/toolkit';
import authReducer  from './feature/authslice';
import postReducer from './feature/postSlice';



const store = configureStore({
    reducer: {
        posts: postReducer ,
        auth: authReducer ,
    }
})

export default store ; 