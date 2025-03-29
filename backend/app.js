const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose') ;

const app = express() ;
dotenv.config() ;


app.use("/",(req,res)=>{
    res.send("server is started") ;
})

module.exports  = app ; 