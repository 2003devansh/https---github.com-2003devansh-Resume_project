const PostMessage = require('../models/postMessage.js'); 

const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await PostMessage.findByIdAndDelete(id);
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await PostMessage.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
