import API from './index.js';

// Sign In API call
export const signIn = (formData) => {
    return API.post('/user/signin', formData);
};

// Sign Up API call
export const signUp = (formData) => {
    return API.post('/user/signup', formData);
};
