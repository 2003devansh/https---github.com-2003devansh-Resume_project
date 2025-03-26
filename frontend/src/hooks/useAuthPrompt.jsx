import { useSelector } from "react-redux";
import { useState } from "react";

export default function useAuthPrompt(){
    const {user}  = useSelector((state)=>{
        state.auth ; 
    })
    const [showPrompt,setShowPrompt] = useState(false) ;
    const requireAuth = (callback)=>{
        if(user){
            callback() ; 
        }else{
            setShowPrompt(true); 
        }
    }; 
    return {showPrompt,setShowPrompt,requireAuth} ; 
}