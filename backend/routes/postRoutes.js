const express = require("express");
const {deletePost,getPost,createPost,updatePost} = require("../controllers/postController") ;
const auth = require("../middleware/authMiddleware")
const router = express.Router() ;

router.get("/",getPost) ;
router.post("/",auth,createPost) ;
router.put("/:id",auth,updatePost) ;
router.delete("/:id",auth,deletePost) ;

module.exports = router ; 


