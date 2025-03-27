import API from './index.js';

// Sign In API call
export const login = (formData) => {
    return API.post('/user/login', formData);
};

// Sign Up API call
export const signup = (formData) => {
    return API.post('/user/signup', formData);
};
