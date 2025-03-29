import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/features/postSlice";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { status, error } = useSelector((state) => state.posts);

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  if (!user) {
    return <p className="text-center text-lg text-gray-500">You need to log in to create a post.</p>;
  }

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...postData, tags: postData.tags.split(","), creator: user.name };
    dispatch(createPost(newPost));
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-[#1e1e1e] p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
      {status === "failed" && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 mb-3 bg-gray-800 rounded"
          value={postData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 mb-3 bg-gray-800 rounded"
          value={postData.message}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="w-full p-2 mb-3 bg-gray-800 rounded"
          value={postData.tags}
          onChange={handleChange}
        />
        <input
          type="text"
          name="selectedFile"
          placeholder="Image URL"
          className="w-full p-2 mb-3 bg-gray-800 rounded"
          value={postData.selectedFile}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Posting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
