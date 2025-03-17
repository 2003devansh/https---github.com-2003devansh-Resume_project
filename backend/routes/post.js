const express = require('express');
const router = express.Router();

const  {getPosts , createPost , updatePost ,deletePost }  = require('../controllers/posts.js');

// to get all the posts
router.get('/',getPosts);

// to post a new post
router.post('/createPost',createPost);

// to update a post 
router.put('/:id',updatePost);

// to delete a post
router.delete('/:id',deletePost) ;



module.exports = router ; 