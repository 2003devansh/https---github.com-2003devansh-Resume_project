const PostMessage = require('../models/postMessage.js'); 

const getPosts = async (req, res) => { 
    try {
        const PostMessages = await PostMessage.find();
        res.status(200).json(PostMessages); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

module.exports = getPosts;
