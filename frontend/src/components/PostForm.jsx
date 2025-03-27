import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/features/postSlice";

export default function PostForm() {
  const [post, setPost] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));
    setPost({ title: "", content: "" });
  };

  return (
    <div className="post-form">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Write your post..."
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
