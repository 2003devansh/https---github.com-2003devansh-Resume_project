import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createPost } from "../redux/features/postSlice";
import Authprompt from "../hooks/useAuthPrompt" ;

export default function PostForm(){
    const dispatch = useDispatch() ;
    const {user} = useSelector((state)=>{
        state = state.auth ;     
    })

}