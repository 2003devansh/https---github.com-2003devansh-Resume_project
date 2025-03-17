const express = require('express');
const router = express.Router();

const  {getPosts , createPost }  = require('../controllers/posts.js');


router.get('/',getPosts); 
router.post('/createPosts',createPost);


module.exports = router ; 