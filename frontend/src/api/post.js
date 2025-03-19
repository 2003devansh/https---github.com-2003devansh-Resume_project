import API from "./index";

const fetchPosts = ()=>{
    API.get('/posts')
}

const createPost = (newPost)=>{
    API.post('/posts',newPost)
}

const updatePost = (id,updatedPost)=>{
    API.put(`/posts/${id}`,updatedPost)
}

const deletePost = (id)=>{
    API.delete(`/posts/${id}`)
}


export {fetchPosts,createPost,updatePost,deletePost} ;