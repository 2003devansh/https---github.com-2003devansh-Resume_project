const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user') ;

const signup =  async (req,res)=>{

    const {name,email,password} = req.body  ; 
    

}