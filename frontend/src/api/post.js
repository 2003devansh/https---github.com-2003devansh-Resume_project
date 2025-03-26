import API from "./index";

const getPosts = async () => {
    const response = await API.get('/posts');
    return response.data; // ✅ Ensure data is returned
};

const createPost = async (newPost) => {
    const response = await API.post('/posts', newPost);
    return response.data;
};

const updatePost = async (id, updatedPost) => {
    const response = await API.put(`/posts/${id}`, updatedPost);
    return response.data;
};

const deletePost = async (id) => {
    const response = await API.delete(`/posts/${id}`);
    return response.data;
};

export { getPosts, createPost, updatePost, deletePost }; 
