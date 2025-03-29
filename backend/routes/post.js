const express = require('express');
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/posts.js');
const auth = require('../middleware/auth'); // Protect routes with auth middleware if needed

// Get all posts (Public)
router.get('/', getPosts);

// Create a new post (Protected)
router.post('/', auth, createPost);

// Update a post by ID (Protected)
router.put('/:id', auth, updatePost);

// Delete a post by ID (Protected)
router.delete('/:id', auth, deletePost);

module.exports = router;
