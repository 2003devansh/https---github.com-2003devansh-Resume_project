const PostMessage = require('../models/postMessage.js'); 

const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

const createPost = async (req, res) => { // Added missing async keyword
    try {
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save(); // Await the save to ensure it's completed before responding
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Export both functions together as an object
module.exports = { getPosts, createPost };
