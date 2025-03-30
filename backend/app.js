const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose') ;
const postRoutes = require('./routes/postRoutes') ;
const userRoutes = require('./routes/userRoutes') ;


const app = express() ;
dotenv.config() ;

app.use(cors()) ;
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  



app.use("/posts",postRoutes) ;
app.use("/auth",userRoutes) ;

module.exports  = app ; 