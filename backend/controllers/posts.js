const PostMessage = require("../models/postMessage"); 
const mongoose = require("mongoose");

// 📝 Get All Posts
const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message }); 
    }
};

// 📝 Create Post
const createPost = async (req, res) => {
    try {
        const { title, content, author, tags, image } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ message: "Title, content, and author are required." });
        }

        const newPost = new PostMessage({ title, content, author, tags, image });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// 📝 Delete Post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Post not found" });
        }

        await PostMessage.findByIdAndDelete(id);
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// 📝 Update Post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Post not found" });
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(id, req.body, { new: true });

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message }); 
    }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
