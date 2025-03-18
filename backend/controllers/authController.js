const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user') ;

const signup =  async (req,res)=>{
    const {password,email,name} = req.body  ;
    try {
        const existingUSer = await User.findOne({email}) ;
        if(existingUSer){
            return res.status(400).json({message: "User already exists"}) ;

        }

        const hashedPassword = await bcrypt.hash(password,12) ;
        const result = await User.create({password : hashedPassword,email,name}) ;
        const token = jwt.sign({email:result.email , id:result._id},process.env.JWT_SECRET,{expiresIn: "1h"}) ;
        res.status(200).json({result,token}) ;
    } catch (error) {

        res.status(500).json({message:"something went wrong"}) ;
        
    }
} ;


const login  = async (req,res)=>{
    const {email,password} = req.body ;
    try {
        const existingUser = await User.findOne({email}) ;
        if(!existingUser){
            return res.status(404).json({message: "User doen not found"}) ;
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password) ;
        if(!isPasswordCorrect){
           return  res.status(404).json({message:"Invalid credentials"} ) ; 
        }

        const token = jwt.sign({email:existingUser.email , id: existingUser._id} , process.env.JWT_SECRET,{expiresIn:"1h"} ) ;

        res.status(200).json({result:existingUser,token}) ;
        
    } catch (error) {
        res.status(500).json({message:"someting went wrong"}) ;
    }

}


module.exports = {signup,login} ;