import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {updateProfile,logout} from "../redux/features/authSlice"

export default function ProfilePage(){
   const dispatch = useDispatch() ;
   const {user}  = useSelector
}