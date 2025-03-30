const express = require("express");
const {deletePost,getPost,createPost,updatePost,getPostById} = require("../controllers/postController") ;
const router = express.Router() ;

router.get("/",getPost) ;
router.post("/",createPost) ;
router.put("/:id",updatePost) ;
router.delete("/:id",deletePost) ;
router.get("/:id",getPostById)

module.exports = router ; 


