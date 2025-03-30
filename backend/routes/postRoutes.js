const express = require("express");
const {deletePost,getPost,createPost,updatePost} = require("../controllers/postController") ;
const router = express.Router() ;

router.get("/",getPost) ;
router.post("/",createPost) ;
router.put("/:id",updatePost) ;
router.delete("/:id",deletePost) ;

module.exports = router ; 


