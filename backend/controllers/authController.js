const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user') ;

const signup =  async (req,res)=>{
    const {name,email,password} = req.body  ; 

    try {
        const existingUser = await User.findOne({email}) ;
        if(existingUser){
            return res.status(400).json({message:"User already exists"}) ;
        }

        const hashedPassword = await bcrypt.hash(password,12) ;
        const result  = await User.create({email,password:hashedPassword,name}) ;
        const token  = jwt.sign({email:result.email , id: result._id},process.env.JWT_SECRET,{expiresIn:"1h"}) ;

    } catch (error) {
        
    }


}