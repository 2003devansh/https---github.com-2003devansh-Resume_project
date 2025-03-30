const express = require("express");
const {signup, login,getUser } = require("../controllers/userController") ;
const router = express.Router() ;


router.post("/signup",signup) ;
router.post("/login",login) ;
router.get("/:id",getUser) ;

module.exports = router ; 

