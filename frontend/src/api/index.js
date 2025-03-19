import axios from 'axios';


const API = axios.create({
    baseURL: 'http://localhost:8000/',
}) ;


API.interceptors.request.use((req)=>{
    const profile  = JSON.parse(localStorage.getItem('profile'));
    if(profile?.token){
        req.headers.Authorization = `Bearer ${profile.token}`;
    }
    return req; 
})

export default API ; 