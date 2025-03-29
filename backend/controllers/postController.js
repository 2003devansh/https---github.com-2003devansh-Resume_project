const Post = require("../models/postSchema") ;

const getPost = async (req,res)=>{
    try {
        const posts = await Post.find() ;
        res.status(200).json(posts) ;
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const createPost = async (req,res)=>{
    try {
        const {title,content,image} = req.body ; 
        const newPost = new Post({
            title,
            content,
            image,
            creator: req.userId, 
        })
        await newPost.save() ;
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


const updatePost = async (req,res)=>{
    try {
        const {id} = req.params; 
        const {title,content,image} = req.body ; 

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {title,content,image} ,
            {new:true}
        )
        if(!updatedPost){
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


const deletePost = async (req,res)=>{
    try {
        const {id} = req.params ;
        const deletedPost = await Post.findByIdAndDelete(id) ;

        if(!deletedPost){
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports  = {deletePost,getPost,createPost,updatePost} ;
