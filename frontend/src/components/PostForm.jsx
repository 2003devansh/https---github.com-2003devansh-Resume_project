import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/features/postSlice";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.posts);

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/"); // Redirect after successful post creation
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#1e1e1e] text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={handleChange}
          required
          className="p-2 bg-gray-800 border border-gray-600 rounded"
        />

        <textarea
          name="content"
          placeholder="Content"
          value={postData.content}
          onChange={handleChange}
          required
          className="p-2 bg-gray-800 border border-gray-600 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={postData.image}
          onChange={handleChange}
          className="p-2 bg-gray-800 border border-gray-600 rounded"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
        >
          {status === "loading" ? "Posting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
