import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createPost } from "../redux/features/postSlice";
import Authprompt from "../hooks/useAuthPrompt" ;

export default function PostForm(){
    const dispatch = useDispatch() ;
    const {user} = useSelector((state)=>{
        state = state.auth ;     
    })
    const [formData,setFormData] = useState({
        title:"",
        description: "" ,
        image: null
    })
    const [showAuthPrompt,setShowAuthPrompt] = useState(false) ;

    const handleChange = (event)=>{
        setFormData({...formData,[event.target.name]:event.target.value}) ; 
    }

    const handleImageChange = (event)=>{
        setFormData({...formData, image:event.target.files[0]}) ;
    }

    const handleSubmit = (event)=>{
        event.preventDefault() ;
        if(!user){
            setShowAuthPrompt(true) ;
            return ; 
        }
        const postData = new FormData(); 
        postData.append("title",formData.title) ;
        postData.append("description",formData.description) ;
        if(formData.image){
            postData.append("image",formData.image); 
        }
        dispatch(createPost(postData)) ;
        setFormData({
            title:"" ,
            description:"" ,
            image: null
        })
    }

}